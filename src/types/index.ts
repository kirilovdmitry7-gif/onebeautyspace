export interface User {
  id: string
  email: string
  name?: string
  createdAt: Date
  updatedAt: Date
}

export interface HealthEntry {
  id: string
  userId: string
  date: Date
  mood: number
  energy: number
  sleep: number
  water: number
  steps: number
  score: number
}

export type SubscriptionTier = 'basic' | 'light' | 'pro'
