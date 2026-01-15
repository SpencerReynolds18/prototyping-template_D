import { create } from 'zustand';

// Example store - replace with your own state management needs
interface AppState {
  // Add your state properties here
}

export const useAppStore = create<AppState>()((set) => ({
  // Add your initial state and actions here
})); 