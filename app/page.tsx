"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, MessageCircle, Heart, Star, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

export default function FunkoPortfolio() {
  const works = [
    {
      id: 1,
      title: "Adão - Shuumatsu no Valkyrie CHIBI",
      images: ["/images/adam.webp"],
      image: "/images/adam.webp",
      category: "Anime",
    },
    {
      id: 2,
      title: " Beatrice - Re:ZERO CHIBI",
      images: ["/images/Beako CHIBI (2).png"],
      image: "/images/Beako CHIBI (2).png",
      category: "Anime",
    },
    {
      id: 3,
      title: "Reyna - VALORANT POP",
      images: ["/images/reyanaPOP.png"],
      image: "/images/reyanaPOP.png",
      category: "Games",
    },
    {
      id: 4,
      title: "Jinx - League Of Legends CHIBI",
      images: ["/images/Jinx Chibi.jpg"],
      image: "/images/Jinx Chibi.jpg",
      category: "Games",
    },
    {
      id: 5,
      title: "Rammus - League of Legends",
      images: ["/images/tatu.jpeg"],
      image: "/images/tatu.jpeg",
      category: "Games",
    },
    {
      id: 6,
      title: "Zed - League of Legends CHIBI",
      images: ["/images/zed chibi.png"],
      image: "/images/zed chibi.png",
      category: "Games",
    },
    {
      id: 7,
      title: "Mordekaiser - League of Legends CHIBI",
      images: ["/images/mordekaiser.webp"],
      image: "/images/mordekaiser.webp",
      category: "Games",
    },
    {
      id: 8,
      title: "Coraline - POP",
      images: ["/images/coraline.webp"],
      image: "/images/coraline.webp",
      category: "Filmes",
    },
    {
      id: 9,
      title: "Avatar Lutador - Personalizado CHIBI",
      images: ["/images/Avatar Lutador (1).png"],
      image: "/images/Avatar Lutador (1).png",
      category: "Personalizados",
    },
    {
      id: 10,
      title: "Beru - Solo Leveling CHIBI",
      images: ["/images/Beru CHIBI.png"],
      image: "/images/Beru CHIBI.png",
      category: "Anime",
    },
    {
      id: 11,
      title: "Neon - VALORANT CHIBI",
      images: ["/images/neon.webp"],
      image: "/images/neon.webp",
      category: "Games",
    },
    {
      id: 12,
      title: "Zoro - One Piece POP",
      images: ["/images/zoro fundo preto.png"],
      image: "/images/zoro fundo preto.png",
      category: "Anime",
    },
    {
      id: 13,
      title: "Pantheon - League of Legends CHIBI",
      images: ["/images/Phanteon.png"],
      image: "/images/Phanteon.png",
      category: "Games",
    },
    {
      id: 14,
      title: "Jett - VALORANT POP",
      images: ["/images/Jett POP.png"],
      image: "/images/Jett POP.png",
      category: "Games",
    },
    {
      id: 15,
      title: "Avatar - Personalizado CHIBI",
      images: ["/images/Avatar Elias.png"],
      image: "/images/Avatar Elias.png",
      category: "Personalizados",
    },
    {
      id: 16,
      title: "Avatar para topo de bolo - Personalizado CHIBI",
      images: ["/images/topo de bolo.png"],
      image: "/images/topo de bolo.png",
      category: "Topo de bolo",
    },
    {
      id: 17,
      title: "Akame - akame ga KILL! CHIBI",
      images: ["/images/Akame.jpg"],
      image: "/images/Akame.jpg",
      category: "Anime",
    },
    {
      id: 18,
      title: "Morgana - League of Legends CHIBI",
      images: ["/images/Morgana.jpg"],
      image: "/images/Morgana.jpg",
      category: "Games",
    },
    {
      id: 19,
      title: "Jett - VALORANT CHIBI",
      images: ["/images/jett chibi.png"],
      image: "/images/jett chibi.png",
      category: "Games",
    },
    {
      id: 20,
      title: "Cavaleiro - PERSONALIZADO CHIBI",
      images: ["/images/Guardião Desbravador .jpg"],
      image: "/images/Guardião Desbravador .jpg",
      category: "Personalizados",
    },
    {
      id: 21,
      title: "Viper - VALORANT POP",
      images: ["/images/viper.png"],
      image: "/images/viper.png",
      category: "Games",
    },
    {
      id: 22,
      title: "Leon - Resident Evil CHIBI",
      images: ["/images/leon.png"],
      image: "/images/leon.png",
      category: "Games",
    },
    {
      id: 23,
      title: "Avatar - Personalizado POP",
      images: ["/images/basquete.png"],
      image: "/images/basquete.png",
      category: "Personalizados",
    },
    {
      id: 24,
      title: "Brunhilde - Shuumatsu no Valkyrie CHIBI",
      images: ["/images/Bruninha.png"],
      image: "/images/Bruninha.png",
      category: "Anime",
    },
    {
      id: 25,
      title: "Soraka - League Of Legends CHIBI",
      images: ["/images/soraka frente.png"],
      image: "/images/soraka frente.png",
      category: "Games",
    },
    {
      id: 26,
      title: "Beakko - RE ZERO",
      images: ["/images/Beakko RE ZERO.jpg"],
      image: "/images/Beakko RE ZERO.jpg",
      category: "Anime",
    },
    {
      id: 27,
      title: "Avatar - Personalizado CHIBI",
      images: ["/images/Avatar Ruiva.png"],
      image: "/images/Avatar Ruiva.png",
      category: "Personalizados",
    },
    {
      id: 28,
      title: "Avatar - Personalizado CHIBI",
      images: ["/images/Avatar mãe segurando nene.png"],
      image: "/images/Avatar mãe segurando nene.png",
      category: "Personalizados",
    },
    {
      id: 29,
      title: "Arlequina - DC POP",
      images: ["/images/arlequina POP.png"],
      image: "/images/arlequina POP.png",
      category: "Filmes",
    },
    {
      id: 30,
      title: "Ekko - League Of Legends POP",
      images: ["/images/ekko POP.png"],
      image: "/images/ekko POP.png",
      category: "Games",
    },
    {
      id: 31,
      title: "Killjoy - VALORANT POP",
      images: ["/images/killjoy POP.png"],
      image: "/images/killjoy POP.png",
      category: "Games",
    },
    {
      id: 32,
      title: "Cabeças de Avatar IMÃ - IMÃ DE GELADEIRA",
      images: ["/images/Imã de geladeira 6 avatar.png"],
      image: "/images/Imã de geladeira 6 avatar.png",
      category: "Chaveiros",
    },
    {
      id: 33,
      title: "Moranguinho - POP",
      images: ["/images/moranguinhoPOP.png"],
      image: "/images/moranguinhoPOP.png",
      category: "Topo de bolo",
    },
    {
      id: 34,
      title: "Poppy - League Of Legends POP",
      images: ["/images/poppy POP.png"],
      image: "/images/poppy POP.png",
      category: "Games",
    },
    {
      id: 35,
      title: "Will o mago - Stranger Things POP",
      images: ["/images/will o mago POP.png"],
      image: "/images/will o mago POP.png",
      category: "Filmes",
    },
    {
      id: 36,
      title: "Cavaleiro de Peixes - Cavaleiros do Zodíaco CHIBI",
      images: ["/images/Cavaleiro de Peixes CHIBI.png"],
      image: "/images/Cavaleiro de Peixes CHIBI.png",
      category: "Anime",
    },
    {
      id: 37,
      title: "Ghost face - PANICO CHIBI",
      images: ["/images/Panico.png"],
      image: "/images/Panico.png",
      category: "Filmes",
    },
    {
      id: 38,
      title: "Cogumelos - Mario",
      images: ["/images/cogumelo do mario.png"],
      image: "/images/cogumelo do mario.png",
      category: "Games",
    },
    {
      id: 39,
      title: "Florzinha - Meninas super poderosas",
      images: ["/images/florzinha.png"],
      image: "/images/florzinha.png",
      category: "Topo de bolo",
    },
    {
      id: 40,
      title: "conjunto Meninas - Meninas super poderosas",
      images: ["/images/meninas super poderosas.png"],
      image: "/images/meninas super poderosas.png",
      category: "Topo de bolo",
    },
    {
      id: 41,
      title: " Avatar - Personalizado POP",
      images: ["/images/naruto personalizado funko.png"],
      image: "/images/naruto personalizado funko.png",
      category: "Personalizados",
    },
    {
      id: 42,
      title: " Mulher Maravilha - DC CHIBI",
      images: ["/images/mulher maravilha.png"],
      image: "/images/mulher maravilha.png",
      category: "Filmes",
    },
    {
      id: 43,
      title: " Bebê Avatar - CHIBI",
      images: ["/images/baby caio.png"],
      image: "/images/baby caio.png",
      category: "Personalizados",
    },
    {
      id: 44,
      title: " Bebê - Topo de bolo PERSONALIZADO CHIBI",
      images: ["/images/topo de bolo nene.png"],
      image: "/images/topo de bolo nene.png",
      category: "Topo de bolo",
    },
    {
      id: 45,
      title: " Ponyo - Studio Ghibli CHIBI",
      images: ["/images/ponyo.png"],
      image: "/images/ponyo.png",
      category: "Filmes",
    },
    {
      id: 46,
      title: " Simo - Shuumatsu CHIBI",
      images: ["/images/simo.png"],
      image: "/images/simo.png",
      category: "Anime",
    },
    {
      id: 47,
      title: " Tesla - Shuumatsu CHIBI",
      images: ["/images/tesla.png"],
      image: "/images/tesla.png",
      category: "Anime",
    },
    {
      id: 48,
      title: " Personagem Loira - PANICO CHIBI",
      images: ["/images/loira panico.png"],
      image: "/images/loira panico.png",
      category: "Filmes",
    },
    {
      id: 51,
      title: " Pet - Chaveiro",
      images: ["/images/chaveiro cachorro.png"],
      image: "/images/chaveiro cachorro.png",
      category: "Chaveiros",
    },
    {
      id: 53,
      title: " Cachorros - Chaveiro",
      images: ["/images/Chaveiro Cachorros.png"],
      image: "/images/Chaveiro Cachorros.png",
      category: "Chaveiros",
    },
    {
      id: 54,
      title: " Empresarial - Chaveiro",
      images: ["/images/chaveiro empresarial.png"],
      image: "/images/chaveiro empresarial.png",
      category: "Chaveiros",
    },
    {
      id: 57,
      title: " Reyna - Chaveiro",
      images: ["/images/chaveiro reyna.png"],
      image: "/images/chaveiro reyna.png",
      category: "Chaveiros",
    },
    {
      id: 58,
      title: " Soraka - Chaveiro",
      images: ["/images/chaveiro soraka.png"],
      image: "/images/chaveiro soraka.png",
      category: "Chaveiros",
    },
    {
      id: 59,
      title: " Toy Alucard - Chaveiro",
      images: ["/images/Chaveiro TOY ALUCARD.png"],
      image: "/images/Chaveiro TOY ALUCARD.png",
      category: "Chaveiros",
    },
    {
      id: 60,
      title: " Toy Luff - Chaveiro",
      images: ["/images/Chaveiro TOY LUFF.png"],
      image: "/images/Chaveiro TOY LUFF.png",
      category: "Chaveiros",
    },
    {
      id: 61,
      title: " Toy Avatares - Chaveiro",
      images: ["/images/Chaveiro TOY 4.png"],
      image: "/images/Chaveiro TOY 4.png",
      category: "Chaveiros",
    },
    {
      id: 62,
      title: " Dragão - PERSONALIZADO",
      images: ["/images/Dragão.png"],
      image: "/images/Dragão.png",
      category: "Personalizados",
    },
    {
      id: 63,
      title: " Pantera Cor de Rosa - POP",
      images: ["/images/Pantera Cor de rosa POP.png"],
      image: "/images/Pantera Cor de rosa POP.png",
      category: "Filmes",
    },
    {
      id: 64,
      title: " Sylvanas Windrunner - World of Warcraft CHIBI",
      images: ["/images/Sylvana CHIBI.png"],
      image: "/images/Sylvana CHIBI.png",
      category: "Games",
    },
    {
      id: 65,
      title: " Toy Kratos - Chaveiro",
      images: ["/images/TOY Kratos.png"],
      image: "/images/TOY Kratos.png",
      category: "Chaveiros",
    },
    {
      id: 66,
      title: " Homem de Ferro - Chaveiro PIXEL",
      images: ["/images/Chaveiro Ferro Hama Beats.png"],
      image: "/images/Chaveiro Ferro Hama Beats.png",
      category: "Chaveiros",
    },
    {
      id: 67,
      title: " Flash - Chaveiro PIXEL",
      images: ["/images/Chaveiro Flash Hama Beats.png"],
      image: "/images/Chaveiro Flash Hama Beats.png",
      category: "Chaveiros",
    },
    {
      id: 68,
      title: " Homem Aranha - Chaveiro PIXEL",
      images: ["/images/Chaveiro Homem Aranha.png"],
      image: "/images/Chaveiro Homem Aranha.png",
      category: "Chaveiros",
    },
    {
      id: 69,
      title: " Homem Aranha mini - Chaveiro PIXEL",
      images: ["/images/Chaveiro Homem Aranha mini.png"],
      image: "/images/Chaveiro Homem Aranha mini.png",
      category: "Chaveiros",
    },
    {
      id: 70,
      title: " Poro - Chaveiro PIXEL",
      images: ["/images/Chaveiro Poro hama beats.png"],
      image: "/images/Chaveiro Poro hama beats.png",
      category: "Chaveiros",
    },
     {
      id: 71,
      title: " Yoshi - Chaveiro PIXEL",
      images: ["/images/Chaveiro Yoshi hama beats.png"],
      image: "/images/Chaveiro Yoshi hama beats.png",
      category: "Chaveiros",
    },
     {
      id: 72,
      title: " Conjunto Dragão IMÃ - IMÃ DE GELADEIRA PIXEL",
      images: ["/images/Conjunto Dragão.png"],
      image: "/images/Conjunto Dragão.png",
      category: "Chaveiros",
    },
     {
      id: 73,
      title: " Coraline - Impressão 3D",
      images: ["/images/Coraline 30cm.png"],
      image: "/images/Coraline 30cm.png",
      category: "Filmes",
    },
    
    

  ]

  const [activeFilter, setActiveFilter] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<typeof works[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = ["Todos", "Chaveiros", "Anime", "Games", "Celebridades", "Personalizados", "Velas", "Filmes", "Topo de bolo"]

  const filteredWorks = activeFilter === "Todos" ? works : works.filter((work) => work.category === activeFilter)

  const openImageModal = (work: typeof works[0]) => {
    setSelectedImage(work)
    setCurrentImageIndex(0)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedImage && selectedImage.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImage.images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage && selectedImage.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedImage.images.length) % selectedImage.images.length)
    }
  }

  // Auto slide para o carrossel
  useEffect(() => {
    if (selectedImage && selectedImage.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedImage.images.length)
      }, 4000) // Troca a imagem a cada 4 segundos

      return () => clearInterval(interval)
    }
  }, [selectedImage])

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
              href="https://wa.me/5519992036450?text=Oi!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20encomendar%20um%20boneco!"
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
                🚚 <strong>4.</strong> Entrego ou envio pelos Correios.
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
                src={selectedImage.images[currentImageIndex] || "/placeholder.svg"}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />

              {/* Indicadores de carrossel */}
              {selectedImage.images.length > 1 && (
                <>
                  {/* Botões de navegação */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Indicadores de pontos */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                    {selectedImage.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/50"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Contador de imagens */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {currentImageIndex + 1} / {selectedImage.images.length}
                  </div>
                </>
              )}
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
                    href={`https://wa.me/5519992036450?text=Oi!%20vi%20o%20trabalho%20"${selectedImage.title}"%20e%20gostaria%20de%20encomendar%20algo%20similar!`}
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
