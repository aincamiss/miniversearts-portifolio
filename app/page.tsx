import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, MessageCircle, Heart, Star } from "lucide-react"

export default function FunkoPortfolio() {
  const works = [
    {
      id: 1,
      title: "Funko Pop Personalizado - Adão Shuumatsu no Valkyrie",
      image: "/images/adam.webp",
      category: "Anime",
    },
    {
      id: 2,
      title: "Funko Pop Personalizado - Billie Eilish Cantora",
      image: "/images/billie.webp",
      category: "Anime",
    },
    {
      id: 3,
      title: "Funko Pop Personalizado - Reyna Valorant",
      image: "/images/reyna.jpeg",
      category: "Games",
    },
    {
      id: 4,
      title: "Funko Pop Personalizado - Jinx Arcane",
      image: "/images/jinx.jpeg",
      category: "Games",
    },
    {
      id: 5,
      title: "Funko Pop Personalizado - Rammus LoL",
      image: "/images/tatu.jpeg",
      category: "Games",
    },
    {
      id: 6,
      title: "Funko Pop Personalizado - Zed LoL",
      image: "/images/zed.jpeg",
      category: "Games",
    },
  ]

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
          <p className="text-white/90 text-sm mb-4 px-2">Aquele Funko Pop que você sempre sonhou? Eu crio para você!</p>
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

        {/* Works Gallery */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 text-center">🎨 Meus Trabalhos</h2>
          <div className="grid grid-cols-2 gap-3">
            {works.map((work) => (
              <Card key={work.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white/95">
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <Badge variant="secondary" className="text-xs mb-2">
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
                🎨 <strong>2.</strong> Manda a foto/ideia do seu Funko
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
          <p>Feito com 💜 para você ter o Funko dos seus sonhos!</p>
          <p className="mt-2">Siga no Instagram para ver mais trabalhos ✨</p>
        </div>
      </div>
    </div>
  )
}
