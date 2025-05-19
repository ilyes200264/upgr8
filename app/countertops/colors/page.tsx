"use client"

import { useState, useMemo } from "react"
import Image from "next/image"

// Exemple de dataset (à remplacer par tes vraies données)
const samples = [
  {
    name: "Arctic White",
    image: "/images/samples/arctic-white.jpg",
    color: "White",
    material: "Quartz",
    finish: "Polished",
  },
  {
    name: "Black Galaxy",
    image: "/images/samples/black-galaxy.jpg",
    color: "Black",
    material: "Granite",
    finish: "Polished",
  },
  {
    name: "Carrara Marble",
    image: "/images/samples/carrara-marble.jpg",
    color: "White",
    material: "Marble",
    finish: "Honed",
  },
  {
    name: "Concrete Grey",
    image: "/images/samples/concrete-grey.jpg",
    color: "Grey",
    material: "Quartz",
    finish: "Matte",
  },
  {
    name: "Emerald Green",
    image: "/images/samples/emerald-green.jpg",
    color: "Green",
    material: "Quartzite",
    finish: "Polished",
  },
]

export default function CountertopsColorsPage() {
  // États pour les filtres
  const [color, setColor] = useState("")
  const [material, setMaterial] = useState("")
  const [finish, setFinish] = useState("")

  // Générer dynamiquement les options de filtres
  const colors = useMemo(() => Array.from(new Set(samples.map(s => s.color))), [])
  const materials = useMemo(() => Array.from(new Set(samples.map(s => s.material))), [])
  const finishes = useMemo(() => Array.from(new Set(samples.map(s => s.finish))), [])

  // Filtrage des échantillons
  const filtered = useMemo(() => {
    return samples.filter(s =>
      (color === "" || s.color === color) &&
      (material === "" || s.material === material) &&
      (finish === "" || s.finish === finish)
    )
  }, [color, material, finish])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">All Countertop Colors</h1>
      {/* Filtres dynamiques */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <select value={color} onChange={e => setColor(e.target.value)} className="border rounded px-3 py-2">
          <option value="">All Colors</option>
          {colors.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select value={material} onChange={e => setMaterial(e.target.value)} className="border rounded px-3 py-2">
          <option value="">All Materials</option>
          {materials.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select value={finish} onChange={e => setFinish(e.target.value)} className="border rounded px-3 py-2">
          <option value="">All Finishes</option>
          {finishes.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>
      {/* Grille responsive */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((sample, idx) => (
          <div key={idx} className="bg-white rounded shadow p-3 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-3">
              <Image src={sample.image} alt={sample.name} fill className="object-cover rounded" />
            </div>
            <div className="text-center">
              <div className="font-semibold">{sample.name}</div>
              <div className="text-sm text-gray-500">{sample.material} &ndash; {sample.finish}</div>
              <div className="text-xs text-gray-400 mt-1">{sample.color}</div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No samples match your filters.</div>
        )}
      </div>
      <div className="mt-12 text-center">
        <a href="mailto:info@groupcmr.com" className="text-blue-600 hover:underline text-lg">info@groupcmr.com</a>
      </div>
    </div>
  )
} 