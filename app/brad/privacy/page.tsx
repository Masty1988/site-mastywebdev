export default function BradPrivacy() {
    return (
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Politique de Confidentialité - Brad</h1>
        
        <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : 31 décembre 2025</p>
        
        <p className="mb-6">
          Brad est une application d'aide à la détection d'arnaques par SMS.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-4">📱 Données collectées</h2>
        <p className="mb-4">
          Brad n'envoie <strong>AUCUNE donnée sur internet</strong>. Toute l'analyse est effectuée 
          localement sur votre téléphone.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Les SMS que vous analysez ne quittent jamais votre appareil</li>
          <li>Aucun compte utilisateur n'est requis</li>
          <li>Aucune donnée personnelle n'est collectée</li>
          <li>Aucune publicité, donc aucun tracking</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-8 mb-4">📊 Données stockées localement</h2>
        <p className="mb-4">Brad stocke uniquement sur votre téléphone :</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Vos statistiques de quiz (série, score)</li>
          <li>Vos préférences d'utilisation</li>
        </ul>
        <p className="mb-6">
          Ces données restent sur votre appareil et peuvent être supprimées 
          en désinstallant l'application.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-4">🔗 Connexions externes</h2>
        <p className="mb-4">Brad se connecte uniquement à GitHub pour récupérer :</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Les questions du quiz</li>
          <li>Les mises à jour de configuration</li>
        </ul>
        <p className="mb-6">
          Aucune donnée personnelle n'est transmise lors de ces connexions.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-4">📧 Contact</h2>
        <p className="mb-2">
          Pour toute question : <a href="mailto:contact@mastywebdev.fr" className="text-blue-600 underline">contact@mastywebdev.fr</a>
        </p>
        <p className="text-gray-600 mt-8">
          MastyWebDev - La Rochelle, France
        </p>
      </main>
    );
  }
  