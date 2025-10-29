// app/download/page.tsx
export default function Download() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Télécharger MSFS TRACKER
      </h1>
      <p className="mb-8">
        Pour voir votre avion sur la carte en temps réel
      </p>
      <a 
        href="/download/MSFS-TRACKER.exe"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg"
      >
        📥 Télécharger l'agent (Windows)
      </a>
      
      <div className="mt-8 text-left max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Téléchargez le tracker</li>
          <li>Lancez MSFS</li>
          <li>Double-cliquez sur l'exe</li>
          <li>Entrez votre pseudo</li>
          <li>Votre avion apparaît sur la carte ! ✈️</li>
        </ol>
      </div>
    </div>
  );
}