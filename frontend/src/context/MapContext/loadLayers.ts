import { Map } from 'mapbox-gl'
import { Threebox } from 'threebox-plugin'

// TODO: move this to shared bc it should be sent via api
export type Location = {
  type: Model
  longitude: number
  latitude: number
}

type Model = 'coffee' | 'boba' | 'ice_cream'

type ModelOptions = {
  obj: string, // url path, e.g. /__models/model1.gltf
  type: string,
  scale: number,
  units: string,
  anchor: string,
  rotation: { x: number, y: number, z: number }
}
const models: Record<Model, ModelOptions> = {
  coffee: {
    // obj: '/models/drivethru.glb',
    obj: '/models/coffee/scene.glb',
    type: 'gltf',
    scale: 1/2,
    units: 'meters',
    anchor: 'center',
    rotation: { x: 90, y: 180, z: 0 },
  },
  boba: {
    obj: '/models/boba/scene.glb',
    type: 'gltf',
    scale: 2,
    units: 'meters',
    anchor: 'center',
    rotation: { x: 90, y: 90, z: 0 },
  },
  ice_cream: {
    obj: '/models/ice_cream/scene.glb',
    type: 'gltf',
    scale: 20,
    units: 'meters',
    anchor: 'center',
    rotation: { x: 90, y: 180, z: 0 },
  },
}

export const loadLayers = (map: Map, locations: Location[], resize: number = 1) => {
  console.log('LOADING LAYERS')
  console.log({ locations })

  const variants = {} as Record<string, Location[]>
  for (const location of locations) {
    if (!variants.hasOwnProperty(location.type)) {
      variants[location.type] = []
    }
    variants[location.type].push(location)
  }

  for (const type in variants) {
    let model;

    map.addLayer({
      id: type,
      type: 'custom',
      renderingMode: '3d',
      render: function (gl, mat) {
        ;(window as any).tb.update()
      },
      onAdd: function (_map, ctx) {
        ;(window as any).tb = new Threebox(_map, ctx, { defaultLights: true })

        const opts = models[type as Model]
        opts.scale *= resize

        variants[type].forEach((location) => {
          ;(window as any).tb.loadObj(opts, function (obj: any) {
            model = obj.setCoords([location.longitude, location.latitude]);
            ;(window as any).tb.add(model)
          })
        })
      }
    })
  }
}