<script>
    import { Router, Route, Link } from "svelte-routing";
    import Dashboard from './Dashboard.svelte';
    import IdentityManagement from './IdentityManagement.svelte';
    import AdminDashboard from './AdminDashboard.svelte';
    import CreditScore from './CreditScore.svelte';
    import Login from './Login.svelte';
    import NotFound from './NotFound.svelte';  // Import the NotFound component
    import { activeRoute, setActiveRoute } from './stores.js'; // A store to track the active route
</script>

<Router>
    <!-- Navigation Links -->
   <nav class="flex space-x-4 p-4 bg-gray-200">
    <Link to="/" class="nav-link" activeClass="active" on:click={() => setActiveRoute('/')}>Dashboard</Link>
    <Link to="/identity-management" class="nav-link" activeClass="active" on:click={() => setActiveRoute('/identity-management')}>Identity Management</Link>
    <Link to="/admin-dashboard" class="nav-link" activeClass="active" on:click={() => setActiveRoute('/admin-dashboard')}>Admin Dashboard</Link>
    <Link to="/credit-score" class="nav-link" activeClass="active" on:click={() => setActiveRoute('/credit-score')}>Credit Score</Link>
    <Link to="/login" class="nav-link" activeClass="active" on:click={() => setActiveRoute('/login')}>Login</Link>
</nav>


    <!-- Define Routes -->
    <Route path="/" component={Dashboard} />
    <Route path="/identity-management" component={IdentityManagement} />
    <Route path="/admin-dashboard" component={AdminDashboard} />
    <Route path="/credit-score" component={CreditScore} />
    <Route path="/login" component={Login} />
    
    <!-- Fallback route for non-existent pages -->
    <Route path="*" component={NotFound} />
</Router>

<style>
    :global(nav) {
        padding: 10px;
        background-color: #f8f8f8;
        box-shadow: 0 4px 2px -2px gray;
    }

    .nav-link {
        text-decoration: none;
        color: #333;
        padding: 10px;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .nav-link:hover {
        background-color: #ddd;
    }

    .active {
        background-color: #007BFF;
        color: white;
    }
</style>
