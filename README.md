# TaskSprint - Freelance Task Marketplace

A modern MERN stack application for posting and completing freelance tasks.

## Features

### ✅ Frontend Features (Live)
- 🏠 **Home Page** - Hero section with featured tasks and statistics
- 📝 **Register/Login** - User authentication with role selection (Client/Freelancer)
- 📋 **Browse Tasks** - Search and filter tasks by category and price
- 💼 **Dashboard** - Overview, task management, earnings, and notifications
- ➕ **Post Task** - Create new tasks with details and budget
- 📌 **Task Details** - View full task information and apply
- 👤 **Profile** - Manage user information and preferences
- 🔔 **Notifications** - Real-time notifications for applications and updates

### 🎨 UI Components
- Responsive design with Tailwind CSS
- Interactive modals and forms
- Tab-based navigation
- Dark sidebar navigation
- Card-based layouts
- Form validation and error handling

## Demo Video Guide

### 1. Landing Page Flow
- View hero section with call-to-actions
- See featured tasks
- View platform statistics (500+ clients, 1200+ freelancers, 5000+ tasks)

### 2. User Authentication
**Login Flow:**
- Navigate to /login
- Enter email and password
- Submit form → Shows success message
- Try "Remember me" checkbox

**Register Flow:**
- Navigate to /register  
- Fill name, email, password
- Select role (Client or Freelancer)
- Submit → Account created confirmation

### 3. Browse & Apply for Tasks
- Navigate to /browse
- View task list with filters (Category, Price Range)
- Click "Apply" button on any task
- Modal opens with application form
- Fill bid amount and cover letter
- Submit application → Success message

### 4. Dashboard (Multiple Tabs)
- Navigate to /dashboard
- Click different tabs to navigate:
  - **Overview**: Stats cards, recent tasks, notifications
  - **My Tasks**: Task list management
  - **Applications**: Applications received
  - **Submissions**: Task submissions
  - **Earnings**: Total earnings display
  - **Profile**: Edit profile information

### 5. Post a Task
- Navigate to /post-task
- Fill form:
  - Task Title
  - Category selection
  - Description (textarea)
  - Budget amount
  - Deadline date
  - Required skills
- Submit → Task posted confirmation

### 6. Task Details Page
- View complete task information
- See client profile
- View task timeline and requirements
- Click "Apply Now" button

### 7. Profile Management
- Edit full name
- Update bio/description
- Change avatar (demo)
- Save changes → Confirmation message

### 8. Notifications
- View notification alerts
- See applications received
- Track task updates
- Mark notifications as read (demo)

## Installation & Local Setup

```bash
# Clone repository
git clone https://github.com/raaahul2003/TaskSprint.git
cd TaskSprint

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Vercel Deployment

### Automatic Deployment (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import GitHub repository
5. Framework: React (auto-detected)
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click "Deploy"

### Environment Variables (if needed)
```
VITE_API_BASE_URL=https://api.example.com
```

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── BrowseTasksPage.jsx
│   ├── DashboardPage.jsx
│   ├── PostTaskPage.jsx
│   ├── TaskDetailsPage.jsx
│   ├── ProfilePage.jsx
│   └── NotificationsPage.jsx
├── components/
│   └── Navbar.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Tech Stack

- **Frontend**: React 18, React Router v6
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.4
- **Package Manager**: npm
- **Deployment**: Vercel

## Key Components Details

### HomePage
- Hero banner with CTA buttons
- Featured tasks grid
- Statistics section
- "How it works" guide

### BrowseTasksPage
- Filter sidebar (category, price)
- Search functionality
- Task cards grid
- Apply modal with form validation

### DashboardPage
- Multi-tab navigation system
- Stats cards (active tasks, earnings, submissions, reviews)
- Recent tasks list
- Notifications panel
- Profile editing form

### PostTaskPage
- Multi-field form
- Category dropdown selection
- Date picker for deadline
- Form validation before submission

### TaskDetailsPage
- Full task information display
- Client profile section
- Timeline and milestones
- Apply button with modal

## Form Validation

All forms include validation for:
- Required fields
- Email format
- Password strength (demo)
- Number inputs (budget, bid)
- Date selection

## Interactive Features

✅ Modal dialogs for task applications
✅ Tab navigation in dashboard
✅ Form state management with React hooks
✅ Alert notifications for actions
✅ Responsive design (mobile, tablet, desktop)
✅ Hover effects and transitions
✅ Button loading states (ready for backend)

## Future Enhancements

- Backend API integration (Node.js/Express)
- MongoDB database for data persistence
- Real user authentication (JWT)
- Payment gateway integration
- Real-time notifications (WebSocket)
- File upload for task attachments
- Rating and review system
- Messaging between users

## Demo Credentials (for future backend)

```
Client Account:
Email: client@example.com
Password: Client@123

Freelancer Account:
Email: freelancer@example.com
Password: Freelancer@123
```

## Support

For issues or questions:
- GitHub Issues: [TaskSprint Issues](https://github.com/raaahul2003/TaskSprint/issues)
- Contact: raj319720@gmail.com

## License

MIT License - feel free to use this project for learning and development.

---

**Live Demo**: [TaskSprint on Vercel](https://tasksprint-vercel.app)

**Repository**: [GitHub](https://github.com/raaahul2003/TaskSprint)
