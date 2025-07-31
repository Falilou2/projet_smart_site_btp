# BuildSN - Construction Management Application

Une application moderne de gestion de construction pour le Sénégal, développée avec React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

### Tableau de Bord Intuitif
- Statistiques en temps réel des projets et budgets
- Visualisations interactives des performances
- Suivi des activités récentes
- Indicateurs de sécurité

### Marketplace E-commerce
- Catalogue de matériaux de construction
- Location d'équipements
- Système de notation des fournisseurs
- Gestion des stocks en temps réel

### Gestion de Projets
- Suivi de l'avancement des projets
- Gestion des budgets et dépenses
- Planification et échéanciers
- Attribution des ressources

### Sécurité et Compétences
- Rapports d'incidents et inspections
- Gestion des certifications d'artisans
- Formations en sécurité
- Suivi des scores de sécurité

## 🛠 Technologies Utilisées

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons + Lucide React
- **Build Tool**: Vite
- **State Management**: Prêt pour Redux/Zustand
- **HTTP Client**: Fetch API natif

## 📱 Design Responsive

L'application est optimisée pour tous les appareils :
- **Mobile** : < 768px (navigation adaptée)
- **Tablet** : 768px - 1024px (grille ajustée)
- **Desktop** : > 1024px (interface complète)

## 🎨 Système de Design

### Couleurs
- **Primary**: Bleu (#3B82F6) - Interface principale
- **Secondary**: Vert (#10B981) - États positifs
- **Accent**: Orange (#F97316) - Actions importantes
- **Error**: Rouge (#EF4444) - Erreurs et alertes
- **Warning**: Jaune (#F59E0B) - Avertissements

### Typographie
- **Famille**: System UI (optimisée pour les appareils)
- **Échelle**: 8px (système d'espacement cohérent)
- **Poids**: Regular, Medium, Bold

## 🔗 Intégration Backend Django

### Configuration API

```typescript
// Configuration dans src/services/api.ts
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
```

### Variables d'Environnement

Créez un fichier `.env` à la racine :

```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_ENVIRONMENT=development
```

### Endpoints Requis

Le backend Django doit exposer ces endpoints :

```python
# urls.py
urlpatterns = [
    # Dashboard
    path('dashboard/stats/', DashboardStatsView.as_view()),
    
    # Projects
    path('projects/', ProjectListCreateView.as_view()),
    path('projects/<str:id>/', ProjectDetailView.as_view()),
    
    # Marketplace
    path('products/', ProductListView.as_view()),
    path('orders/', OrderCreateView.as_view()),
    
    # Artisans
    path('artisans/', ArtisanListView.as_view()),
    
    # Safety
    path('safety-reports/', SafetyReportListCreateView.as_view()),
    
    # Authentication
    path('auth/login/', LoginView.as_view()),
    path('auth/refresh/', RefreshTokenView.as_view()),
]
```

### Modèles Django Suggérés

```python
# models.py
from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    STATUS_CHOICES = [
        ('planning', 'Planification'),
        ('in-progress', 'En cours'),
        ('completed', 'Terminé'),
        ('on-hold', 'En attente'),
    ]
    
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    progress = models.IntegerField(default=0)
    budget = models.DecimalField(max_digits=15, decimal_places=2)
    spent = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    start_date = models.DateField()
    end_date = models.DateField()
    location = models.CharField(max_length=200)
    manager = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('materials', 'Matériaux'),
        ('equipment', 'Équipements'),
    ]
    
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    unit = models.CharField(max_length=50)
    image = models.URLField()
    in_stock = models.BooleanField(default=True)
    supplier = models.CharField(max_length=200)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

class Artisan(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    experience = models.IntegerField()
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    certifications = models.JSONField(default=list)
    available = models.BooleanField(default=True)
    location = models.CharField(max_length=100)

class SafetyReport(models.Model):
    TYPE_CHOICES = [
        ('incident', 'Incident'),
        ('inspection', 'Inspection'),
        ('training', 'Formation'),
    ]
    
    SEVERITY_CHOICES = [
        ('low', 'Faible'),
        ('medium', 'Moyenne'),
        ('high', 'Haute'),
    ]
    
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    severity = models.CharField(max_length=10, choices=SEVERITY_CHOICES)
    description = models.TextField()
    date = models.DateField()
    resolved = models.BooleanField(default=False)
```

### Authentification

L'application utilise JWT pour l'authentification :

```python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': True,
}
```

## 🚀 Installation et Démarrage

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation
npm run preview

# Linting
npm run lint
```

## 📁 Structure du Projet

```
src/
├── components/           # Composants React
│   ├── Layout/          # Header, Sidebar
│   ├── Dashboard/       # Tableau de bord
│   ├── Projects/        # Gestion projets
│   ├── Marketplace/     # E-commerce
│   ├── Artisans/       # Gestion artisans
│   └── Safety/         # Sécurité
├── data/               # Données mockées
├── hooks/              # Hooks personnalisés
├── services/           # Services API
├── types/              # Types TypeScript
├── utils/              # Utilitaires
└── App.tsx            # Composant principal
```

## 🌍 Localisation

L'application est développée en français pour le marché sénégalais avec :
- Interface en français
- Format de devise CFA (XOF)
- Formats de date localisés
- Considération pour l'ajout de langues locales (Wolof)

## 🔒 Sécurité

- Authentification JWT
- Validation côté client et serveur
- Protection CSRF
- Sanitization des données utilisateur
- Permissions basées sur les rôles

## 📈 Performance

- Code splitting par route
- Lazy loading des composants
- Optimisation des images
- Cache des requêtes API
- Bundle size optimisé

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests de couverture
npm run test:coverage

# Tests E2E (à configurer)
npm run test:e2e
```

## 🚀 Déploiement

### Variables de Production

```env
REACT_APP_API_URL=https://your-api-domain.com/api
REACT_APP_ENVIRONMENT=production
```

### Build de Production

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier `dist/`.

## 📞 Support

Pour toute question ou support technique :
- Email: support@buildsn.com
- Documentation: [wiki du projet]
- Issues: [GitHub Issues]

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Fait avec ❤️ au Sénégal 🇸🇳**