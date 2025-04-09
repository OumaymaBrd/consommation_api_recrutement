import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Plateforme de Recrutement</CardTitle>
            <CardDescription>Connectez-vous ou inscrivez-vous pour commencer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Link href="/login" className="w-full">
                <Button className="w-full" size="lg">
                  Se connecter
                </Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full" variant="outline" size="lg">
                  S'inscrire
                </Button>
              </Link>
            </div>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            Trouvez votre prochain emploi ou votre prochain candidat
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
