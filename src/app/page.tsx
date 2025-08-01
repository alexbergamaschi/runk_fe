import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapIcon,
  TrophyIcon,
  UsersIcon,
  TargetIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen apple-gradient dark:apple-gradient-dark">
      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium tracking-wide"
          >
            Integrazione Strava
          </Badge>

          <div className="space-y-6">
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight">
              <span className="apple-text-gradient dark:apple-text-gradient-dark">
                RUNK
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Corri, conquista, domina.
            </p>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Trasforma ogni corsa in una sfida strategica: chiudi i tuoi
              percorsi, conquista territori reali e sfida altri runner per il
              controllo della mappa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 apple-button apple-shadow dark:apple-shadow-dark"
            >
              Inizia la Conquista
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-slate-50 dark:hover:bg-slate-800 apple-button"
            >
              Connetti Strava
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Non è solo corsa.
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            È territorio, strategia e conquista. Ogni chilometro conta. Ogni
            curva è una mossa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group apple-card border-0 bg-white/70 dark:bg-slate-800/70 apple-blur apple-shadow dark:apple-shadow-dark">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Conquista Territori
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Chiudi i tuoi percorsi e trasforma le strade in territorio
                conquistato. Ogni loop completato espande il tuo regno.
              </p>
            </CardContent>
          </Card>

          <Card className="group apple-card border-0 bg-white/70 dark:bg-slate-800/70 apple-blur apple-shadow dark:apple-shadow-dark">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Sfide Strategiche
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Ogni corsa è una mossa strategica. Pianifica i tuoi percorsi per
                massimizzare la conquista e dominare la mappa.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Sfida Altri Runner
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Compete per il controllo della mappa. Difendi i tuoi territori e
                conquista quelli degli avversari.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TargetIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Obiettivi Mirati
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Definisci obiettivi strategici e raggiungi traguardi che
                espandono il tuo dominio sulla mappa.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Analisi Avanzate
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Studia le tue performance e quelle degli avversari per
                sviluppare strategie di conquista vincenti.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Difesa del Regno
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Proteggi i tuoi territori conquistati e costruisci un impero di
                corsa inespugnabile.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strava Integration */}
      <section className="px-6 py-24 bg-gradient-to-r from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium tracking-wide"
            >
              Integrazione Perfetta
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Connesso con Strava
            </h2>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Sincronizza automaticamente le tue corse e trasformale in
              conquiste territoriali. Nessuna doppia registrazione, solo pura
              strategia.
            </p>

            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-full bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 shadow-xl"
              >
                Connetti il tuo Account Strava
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-32 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Preparati a correre per il tuo regno.
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Scarica Runk oggi e inizia la tua conquista. Ogni passo è una
            strategia, ogni corsa è una battaglia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="px-12 py-6 text-xl font-bold rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-all duration-200 shadow-2xl"
            >
              Scarica Runk
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              RUNK
            </div>

            <div className="flex space-x-8">
              <a
                href="#"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Termini
              </a>
              <a
                href="#"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                Supporto
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-500 dark:text-slate-400">
            © 2024 Runk. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}
