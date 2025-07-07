"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, MessageCircle, Heart, Star, X, ZoomIn } from "lucide-react"

export default function FunkoPortfolio() {
  const works = [
    {
      id: 1,
      title: "Chibi Personalizado - Adão Shuumatsu no Valkyrie",
      image: "/images/adam.webp",
      category: "Anime",
    },
    {
      id: 2,
      title: "Chibi Personalizado - Billie Eilish",
      image: "/images/billie.webp",
      category: "Celebridades",
    },
    {
      id: 3,
      title: "Funko Pop Personalizado - Reyna Valorant",
      image: "/images/reyna.jpeg",
      category: "Games",
    },
    {
      id: 4,
      title: "Chibi Personalizado - Jinx Arcane",
      image: "/images/jinx.jpeg",
      category: "Games",
    },
    {
      id: 5,
      title: "Chibi Personalizado - Rammus League of Legends",
      image: "/images/tatu.jpeg",
      category: "Games",
    },
    {
      id: 6,
      title: "Chibi Personalizado - Zed League of Legends",
      image: "/images/zed.jpeg",
      category: "Games",
    },
    {
      id: 7,
      title: "Chibi Personalizado - Mordekaiser League of Legends",
      image: "/images/mordekaiser.webp",
      category: "Games",
    },
    {
      id: 8,
      title: "Funko Pop Personalizado - Coraline",
      image: "/images/coraline.webp",
      category: "Filmes",
    },
    {
      id: 9,
      title: "Chibi Personalizado - Avatar Personalizado",
      image: "/images/gremista.webp",
      category: "Personalizados",
    },
    {
      id: 10,
      title: "Chibi Personalizado - Beru Solo Leveling",
      image: "/images/beru.webp",
      category: "Anime",
    },
    {
      id: 11,
      title: "Chibi Personalizado - Neon Valorant",
      image: "/images/neon.webp",
      category: "Anime",
    },
    {
      id: 12,
      title: "Funko Pop Personalizado - Zoro One Piece",
      image: "/images/zoro.webp",
      category: "Anime",
    },
    {
      id: 13,
      title: "Chibi Personalizado - Pantheon League of Legends",
      image: "/images/pantheon.webp",
      category: "Anime",
    },
    {
      id: 14,
      title: "Funko Pop Personalizado - Jett Valorant",
      image: "/images/jett.webp",
      category: "Games",
    },
    {
      id: 15,
      title: "Chibi Personalizado - Avatar Personalizado",
      image: "/images/oculos.webp",
      category: "Personalizados",
    },
  ]

  const [activeFilter, setActiveFilter] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<typeof works[0] | null>(null)

  const categories = ["Todos", "Anime", "Games", "Celebridades", "Personalizados", "Velas", "Filmes", "Topo de bolo"]

  const filteredWorks = activeFilter === "Todos" ? works : works.filter((work) => work.category === activeFilter)

  const openImageModal = (work: typeof works[0]) => {
    setSelectedImage(work)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 p-4">
      <div className="max-w-md mx-auto">
        {/* Header Profile */}
        <div className="text-center mb-8 pt-8">
          <div className="relative mb-4">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
              <Image
                src="/images/profile.jpeg"
                alt="Miniverse Arts - Criadora de Funko Pop Personalizados"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
              <Star className="w-4 h-4 text-yellow-600 fill-current" />
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 px-2 whitespace-nowrap">✨ Miniverse Arts ✨</h1>
          <p className="text-white/90 text-sm mb-4 px-2">Aquele boneco que você sempre sonhou? Eu crio para você!</p>
          <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Heart className="w-3 h-3 mr-1 fill-current" />
            Feito com amor
          </Badge>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-3 mb-8">
          <Button
            asChild
            className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg shadow-lg"
          >
            <Link
              href="https://wa.me/5519992036450?text=Oi!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20encomendar%20um%20Funko%20Pop%20personalizado!"
              target="_blank"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fazer Pedido no WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full h-14 bg-white/90 hover:bg-white border-2 border-white text-purple-600 font-semibold text-lg shadow-lg"
          >
            <Link href="https://www.instagram.com/miniverse.arts" target="_blank">
              <Instagram className="w-5 h-5 mr-2" />
              Chamar na DM do Instagram
            </Link>
          </Button>
        </div>

        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`text-sm font-medium transition-all ${activeFilter === category
                  ? "bg-white text-purple-600 shadow-lg scale-105"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                  }`}
              >
                {category}
                {category !== "Todos" && (
                  <Badge className="ml-2 bg-purple-100 text-purple-600 text-xs">
                    {works.filter((work) => work.category === category).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Works Gallery */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 text-center">🎨 Meus Trabalhos</h2>
          <div className="grid grid-cols-2 gap-3">
            {filteredWorks.map((work) => (
              <Card
                key={work.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 cursor-pointer transform hover:scale-105 group"
                onClick={() => openImageModal(work)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-3">
                    <Badge
                      variant="secondary"
                      className={`text-xs mb-2 ${work.category === "Anime" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                        }`}
                    >
                      {work.category}
                    </Badge>
                    <p className="text-sm font-medium text-gray-800 leading-tight">{work.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="bg-white/95 shadow-lg mb-8">
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-lg mb-3 text-gray-800">💝 Como Funciona</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                📱 <strong>1.</strong> Me chama no WhatsApp ou DM
              </p>
              <p>
                🎨 <strong>2.</strong> Manda a foto/ideia do seu personagem
              </p>
              <p>
                ⏰ <strong>3.</strong> Prazo de 7-15 dias úteis
              </p>
              <p>
                🚚 <strong>4.</strong> Entrego ou envio pelos Correios
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-white/80 text-sm pb-8">
          <p>Feito com 💜 para você ter o boneco dos seus sonhos!</p>
          <p className="mt-2">Siga no Instagram para ver mais trabalhos ✨</p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-sm w-full bg-white rounded-2xl shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="aspect-square relative overflow-hidden rounded-t-2xl">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <Badge
                variant="secondary"
                className={`text-xs mb-3 ${selectedImage.category === "Anime" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"}`}
              >
                {selectedImage.category}
              </Badge>
              <h3 className="text-lg font-bold text-gray-800 mb-4">{selectedImage.title}</h3>

              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                >
                  <Link
                    href={`https://wa.me/5519992036450?text=Oi!%20Vi%20o%20trabalho%20"${selectedImage.title}"%20e%20gostaria%20de%20encomendar%20algo%20similar!`}
                    target="_blank"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quero um igual!
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <Link href="https://www.instagram.com/miniverse.arts" target="_blank">
                    <Instagram className="w-4 h-4 mr-2" />
                    Ver mais no Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
