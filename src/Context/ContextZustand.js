import create from 'zustand'

const useStore = create((set) => ({
    cameras: [],
    RoomRef: [],
}))

export const useCameras = () => useStore((state) => state.cameras)
export const useRoom = () => useStore((state) => state.RoomRef)
export const useSetRoom = (room) => useStore((state) => {room.map(item => {state.RoomRef.push(item)})})

  
