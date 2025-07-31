import React from 'react';
import { 
  BuildingOffice2Icon,
  ChartBarIcon,
  ShoppingBagIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface LandingPageProps {
  onSwitchToLogin: () => void;
  onSwitchToRegister: () => void;
}

export function LandingPage({ onSwitchToLogin, onSwitchToRegister }: LandingPageProps) {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Tableau de Bord Intuitif',
      description: 'Visualisez vos projets, budgets et performances en temps réel avec des graphiques interactifs.'
    },
    {
      icon: ShoppingBagIcon,
      title: 'Marketplace Intégrée',
      description: 'Achetez des matériaux et louez des équipements directement depuis la plateforme.'
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Gestion de Projets',
      description: 'Planifiez, suivez et gérez tous vos projets de construction avec des outils avancés.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Sécurité des Chantiers',
      description: 'Gérez les rapports de sécurité, inspections et formations pour vos équipes.'
    },
    {
      icon: UserGroupIcon,
      title: 'Gestion des Artisans',
      description: 'Trouvez et gérez vos artisans qualifiés avec un système de certification.'
    }
  ];

  const testimonials = [
    {
      name: 'Amadou Diallo',
      role: 'Chef de Projet',
      company: 'Construction Dakar',
      content: 'BuildSN a révolutionné notre façon de gérer les projets. Tout est centralisé et facile à utiliser.',
      rating: 5
    },
    {
      name: 'Fatou Sarr',
      role: 'Directrice',
      company: 'Bâtiment Moderne',
      content: 'La marketplace nous fait gagner un temps précieux pour l\'approvisionnement en matériaux.',
      rating: 5
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '25,000',
      period: 'mois',
      features: [
        'Jusqu\'à 5 projets',
        'Tableau de bord basique',
        'Support email',
        'Stockage 5GB'
      ]
    },
    {
      name: 'Professional',
      price: '75,000',
      period: 'mois',
      popular: true,
      features: [
        'Projets illimités',
        'Tableau de bord avancé',
        'Marketplace complète',
        'Support prioritaire',
        'Stockage 50GB',
        'Rapports détaillés'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      features: [
        'Tout de Professional',
        'API personnalisée',
        'Formation équipe',
        'Support dédié',
        'Stockage illimité',
        'Intégrations avancées'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BuildingOffice2Icon className="w-8 h-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">BuildSN</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Fonctionnalités</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Tarifs</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Témoignages</a>
              <button
                onClick={onSwitchToLogin}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Connexion
              </button>
              <button
                onClick={onSwitchToRegister}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Commencer
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-bounce delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-white">Gérez vos projets de</span>
              <span className="text-yellow-300 block"> construction</span>
              <br />
              <span className="text-white">comme un pro</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              BuildSN est la plateforme tout-en-un pour la gestion de projets de construction au Sénégal. 
              Planifiez, suivez et réussissez vos projets avec nos outils modernes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onSwitchToRegister}
                className="flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Commencer gratuitement
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                Voir la démo
              </button>
            </div>
            
            <div className="mt-16 relative">
              {/* Image Container with Enhanced Styling */}
              <div className="relative mx-auto max-w-5xl">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Chantier de construction moderne au Sénégal avec grues et ouvriers"
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />
                  {/* Overlay with stats */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-sm text-gray-600">Projets réalisés</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction client</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-gray-600">Support technique</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-80">
              <div className="flex items-center text-white/80">
                <BuildingOffice2Icon className="w-6 h-6 mr-2" />
                <span className="text-sm">Certifié ISO 9001</span>
              </div>
              <div className="flex items-center text-white/80">
                <ShieldCheckIcon className="w-6 h-6 mr-2" />
                <span className="text-sm">Sécurisé SSL</span>
              </div>
              <div className="flex items-center text-white/80">
                <UserGroupIcon className="w-6 h-6 mr-2" />
                <span className="text-sm">+10,000 utilisateurs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <StarIcon className="w-4 h-4 mr-2" />
              Fonctionnalités Premium
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une suite complète d'outils pour gérer efficacement vos projets de construction
            </p>
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Construction site management"
                className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
              />
            </div>
          </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une suite complète d'outils pour gérer efficacement vos projets de construction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Rejoignez des centaines d'entreprises qui nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tarifs transparents
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le plan qui correspond à vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-sm ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600"> CFA/{plan.period}</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onSwitchToRegister}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Commencer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à transformer votre gestion de projets ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez BuildSN aujourd'hui et découvrez comment simplifier la gestion de vos projets de construction.
          </p>
          
          <button
            onClick={onSwitchToRegister}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            Commencer maintenant
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BuildingOffice2Icon className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">BuildSN</span>
              </div>
              <p className="text-gray-400">
                La plateforme de gestion de construction moderne pour le Sénégal.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white">Tarifs</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">À propos</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carrières</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildSN. Tous droits réservés. Fait avec ❤️ au Sénégal 🇸🇳</p>
          </div>
        </div>
      </footer>
    </div>
  );
}