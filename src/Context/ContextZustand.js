import create from 'zustand'

const useStore = create((set) => ({
    cameras: [],
}))

export const useCameras = () => useStore((state) => state.cameras)
export const useAddCameras = (cam) => {
    useStore((state) => {
        cam?.current
        && !state.cameras.find((camera) => camera.current.uuid === cam.current.uuid) 
        && state.cameras.push(cam)
    })
  
} 