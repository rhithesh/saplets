"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import "leaflet/dist/leaflet.css"

// ✅ Dynamically import react-leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false })

// Cities
const cities = [
  { name: "India (New Delhi)", coords: [28.6139, 77.2090] },
  { name: "UK (London)", coords: [51.5072, -0.1276] },
  { name: "France (Paris)", coords: [48.8566, 2.3522] },
  { name: "Georgia (Tbilisi)", coords: [41.7151, 44.8271] },
  { name: "USA (Washington, D.C.)", coords: [38.9072, -77.0369] },
  { name: "Australia (Canberra)", coords: [-35.2809, 149.1300] }
];

export default function MapComponent() {
  const [L, setL] = useState<any>(null)
  const [defaultIcon, setDefaultIcon] = useState<any>(null)

  // ✅ Load leaflet only in browser
  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet)

      const icon = new leaflet.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      })

      setDefaultIcon(icon)
    })
  }, [])

  // While leaflet is loading
  if (!L || !defaultIcon) {
    return <p className="text-center py-10">Loading map...</p>
  }

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Our Customers Around the World 🌍</h2>
        <p className="text-gray-600">
          We’re proud to have customers in{" "}
          <span className="font-semibold">Paris, London, Mumbai, New York</span>{" "}
          and <span className="font-semibold">Sydney</span>.
        </p>
      </div>

      <div className="w-full h-[600px]">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={true}
          className="w-full h-full rounded-2xl shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.carto.com/">CARTO</a> &copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
          />

          {cities.map((city) => (
            <Marker
              key={city.name}
              position={city.coords as [number, number]}
              icon={defaultIcon}
            >
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}
