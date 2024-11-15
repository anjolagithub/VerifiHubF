<script>
    import { onMount } from 'svelte';
    import { ethers } from 'ethers';

    let identityStatus = "Not Verified";
    let creditScore = 0;
    let isLoading = false;
    let errorMessage = "";

    // Function to fetch user data from the blockchain
    async function fetchUserData() {
        if (typeof window.ethereum === 'undefined') {
            errorMessage = "Ethereum provider not found. Please install MetaMask.";
            return;
        }

        try {
            isLoading = true;
            // Connect to Web3 and fetch identity status and credit score
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const userAddress = await signer.getAddress();

            // Replace with actual contract interaction logic
            // Example: const userData = await contract.getUserData(userAddress);
            identityStatus = "Verified"; // Placeholder value
            creditScore = 750; // Placeholder value
        } catch (error) {
            errorMessage = "Error fetching user data: " + error.message;
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        fetchUserData();
    });
</script>

<div class="p-4">
    <h1 class="text-xl font-bold">Dashboard</h1>

    {#if isLoading}
        <p>Loading user data...</p>
    {:else}
        <div class="mt-4">
            <p>Identity Status: <strong>{identityStatus}</strong></p>
            <p>Credit Score: <strong>{creditScore}</strong></p>
            {#if errorMessage}
                <p class="text-red-500">{errorMessage}</p>
            {/if}
            <button class="bg-blue-500 text-white px-4 py-2 mt-2" on:click={fetchUserData}>Verify Identity</button>
            <button class="bg-green-500 text-white px-4 py-2 mt-2">Store New Identity</button>
        </div>
    {/if}
</div>
