import create from 'zustand'

const THEME_COLORS = {
    light: "#f3f",
    dark: "#333"
}

const useStore = create((set) => ({

    AmbiantLight: undefined,
    DirLight: undefined,
    mainCamera: undefined,
    setCamera: (cam) => {set(() => ({mainCamera: cam}))},
    setLights: (amblight, dirlight) => { set(() => ({AmbiantLight: amblight, DirLight: dirlight}))}
  
    
}))

const useThemeStore = create((set) => ({
    Theme: {color: window.localStorage.getItem('ThemeColor') || THEME_COLORS.light, mode: window.localStorage.getItem('ThemeMode') || 'light' }, 
    toggleTheme: () => 
    {      
        set((state) => {
                let temp = {Theme: {
                    mode: state.Theme.mode === 'dark' ? 'light' : 'dark',
                    color: state.Theme.mode === 'dark' ?  THEME_COLORS.light : THEME_COLORS.dark,
                }}
                localStorage.setItem('ThemeColor',temp.Theme.color)
                localStorage.setItem('ThemeMode' ,temp.Theme.mode)
                return (temp)
            }
        )
    },
    setTheme: (color, mode) => {
        set(() => {
            return (
                {
                    Theme: {
                        mode: mode,
                        color: color
                    }
                }
            )
        })
    }
    
}))


export default useStore
export const useSetRoom = (room) => useStore((state) => {state.RoomRef = room})
export const useTheme = () => useThemeStore((state) => state.Theme)
export const useToggleTheme = () => useThemeStore((state) => state.toggleTheme)
export const useSetTheme = (color, mode) => useThemeStore((state) => state.setTheme(color, mode))

  
