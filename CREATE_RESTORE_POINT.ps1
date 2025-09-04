# CREATE_RESTORE_POINT.ps1 - Универсальный скрипт точек восстановления One Beauty
param(
    [string]$PointName = "AutoSave",
    [string]$Description = ""
)

Write-Host "🔄 СОЗДАНИЕ ТОЧКИ ВОССТАНОВЛЕНИЯ ONE BEAUTY" -ForegroundColor Magenta

if ($PointName -eq "AutoSave") {
    $PointName = "Checkpoint_$(Get-Date -Format 'HHmm')"
}

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$restoreDir = "C:\OneBeauty-RestorePoints\$timestamp-$PointName"

@("project", "continue", "vscode", "docs", "src") | ForEach-Object {
    New-Item -ItemType Directory -Path "$restoreDir\$_" -Force | Out-Null
}

Write-Host "📁 Сохранение: $PointName" -ForegroundColor Yellow

# Копирование файлов проекта
@("package.json", "tailwind.config.ts", "tsconfig.json", "PROJECT_STATUS.md", "PROJECT_CONTEXT_CURRENT.md", ".env.local") | ForEach-Object {
    $source = "C:\projects\onebeautyspace\$_"
    if (Test-Path $source) {
        Copy-Item $source -Destination "$restoreDir\project\$_" -Force
    }
}

# Continue и VS Code
Copy-Item "$env:USERPROFILE\.continue\config.yaml" -Destination "$restoreDir\continue\" -Force -ErrorAction SilentlyContinue
if (Test-Path "C:\projects\onebeautyspace\.vscode") {
    Copy-Item "C:\projects\onebeautyspace\.vscode\*" -Destination "$restoreDir\vscode\" -Force
}

# Обновление индекса
$indexPath = "C:\OneBeauty-RestorePoints\INDEX.md"
$indexEntry = "- $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): **$PointName** $(if($Description){"- $Description"})"
Add-Content -Path $indexPath -Value $indexEntry -Encoding UTF8

$size = [math]::Round((Get-ChildItem -Path $restoreDir -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1MB, 2)

Write-Host "✅ ТОЧКА ВОССТАНОВЛЕНИЯ СОЗДАНА!" -ForegroundColor Green
Write-Host "📁 Имя: $PointName" -ForegroundColor Cyan
Write-Host "📊 Размер: ${size}MB" -ForegroundColor Cyan
