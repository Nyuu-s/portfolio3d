import create from 'zustand'

const THEME_COLORS = {
    light: "#fff",
    dark: "#333"
}

const useStore = create((set) => ({

    RoomRef: undefined,
  
    
}))

const useThemeStore = create((set) => ({
    Theme: window.localStorage.getItem('Theme') || {mode: 'light', color: THEME_COLORS.light},
    toggleTheme: () => 
    {      
        set((state) => ({
            Theme: {
                mode: state.Theme.mode === 'dark' ? 'light' : 'dark',
                color: state.Theme.mode === 'dark' ?  THEME_COLORS.light : THEME_COLORS.dark,
            }
        }))
    }
    
}))

export const useCameras = () => useStore((state) => state.cameras)
export const useRoom = () => useStore((state) => state.RoomRef)
export const useSetRoom = (room) => useStore((state) => {state.RoomRef = room})
export const useTheme = () => useThemeStore((state) => state.Theme)
export const useToggleTheme = () => useThemeStore((state) => state.toggleTheme)

  
