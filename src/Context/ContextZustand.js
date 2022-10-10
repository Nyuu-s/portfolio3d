import create from 'zustand'

const useStore = create((set) => ({
    cameras: [],
    RoomRef: undefined,
}))

export const useCameras = () => useStore((state) => state.cameras)
export const useRoom = () => useStore((state) => state.RoomRef)
export const useSetRoom = (room) => useStore((state) => {state.RoomRef = room})

  
