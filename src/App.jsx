import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [showLevels, setShowLevels] = useState(false)
  
  const levels = [
    { id: 'a1', name: 'A1', description: 'Elementary', color: 'bg-blue-500' },
    { id: 'a2', name: 'A2', description: 'Pre-intermediate', color: 'bg-green-500' },
    { id: 'b1', name: 'B1', description: 'Intermediate', color: 'bg-purple-500' },
    { id: 'b1plus', name: 'B1+', description: 'Upper-intermediate', color: 'bg-orange-500' },
    { id: 'b2', name: 'B2', description: 'Pre-advanced', color: 'bg-red-500' }
  ]

  const handleLevelClick = (levelId) => {
    console.log(`Navegando para nível: ${levelId}`)
    setShowLevels(false)
    // Aqui será implementada a navegação futura
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">BR-English</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Grammar</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Vocabulary</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Listening</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Reading</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            BR-English
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Aprenda inglês onde e quando quiser, com conteúdos completos para Grammar, Vocabulary, Listening e Reading, organizados em cinco níveis:
          </p>

          {/* Level Selector Button */}
          <div className="mb-12">
            <Button
              onClick={() => setShowLevels(!showLevels)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              Escolha seu Nível
            </Button>
          </div>

          {/* Levels Modal/Dropdown */}
          {showLevels && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowLevels(false)}>
              <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-semibold mb-4 text-center text-foreground">Selecione seu nível</h3>
                <div className="space-y-3">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => handleLevelClick(level.id)}
                      className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      <div className={`w-10 h-10 rounded-full ${level.color} flex items-center justify-center text-white font-bold text-sm`}>
                        {level.name}
                      </div>
                      <span className="text-foreground font-medium">{level.description}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setShowLevels(false)}
                  className="w-full mt-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">
              Escolha seu nível e comece a aprender inglês de forma estruturada e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-accent">
                Teste de Nível
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 BR-English. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

