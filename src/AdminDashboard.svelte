<script>
    let users = []; // Replace with actual user data fetching logic
    let isLoading = false; // Track loading state for user actions
    let actionStatus = ''; // Track success or failure message for actions

    async function verifyUser(userAddress) {
        if (confirm(`Are you sure you want to verify the user: ${userAddress}?`)) {
            isLoading = true;
            actionStatus = ''; // Clear previous status

            try {
                console.log("Verifying User:", userAddress);
                // Replace with actual smart contract interaction to verify user
                await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating delay
                actionStatus = `User ${userAddress} has been successfully verified.`;
            } catch (error) {
                console.error("Error verifying user:", error);
                actionStatus = `Failed to verify user ${userAddress}. Please try again.`;
            } finally {
                isLoading = false;
            }
        }
    }

    async function revokeUser(userAddress) {
        if (confirm(`Are you sure you want to revoke the user: ${userAddress}?`)) {
            isLoading = true;
            actionStatus = ''; // Clear previous status

            try {
                console.log("Revoking User:", userAddress);
                // Replace with actual smart contract interaction to revoke user
                await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating delay
                actionStatus = `User ${userAddress} has been successfully revoked.`;
            } catch (error) {
                console.error("Error revoking user:", error);
                actionStatus = `Failed to revoke user ${userAddress}. Please try again.`;
            } finally {
                isLoading = false;
            }
        }
    }

    // Example of fetching user data - Replace with actual logic
    async function fetchUsers() {
        isLoading = true;
        try {
            // Simulating fetching data
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating delay
            users = [
                { address: '0x123...', status: 'Pending' },
                { address: '0x456...', status: 'Verified' },
                { address: '0x789...', status: 'Revoked' },
            ];
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        fetchUsers();
    });
</script>

<div class="p-4">
    <h1 class="text-xl font-bold">Admin Dashboard</h1>

    {#if isLoading}
        <p>Loading...</p>
    {/if}

    {#if actionStatus}
        <p class="mt-2 text-green-500">{actionStatus}</p>
    {/if}

    <table class="min-w-full border-collapse border border-gray-200 mt-4">
        <thead>
            <tr>
                <th class="border border-gray-300 p-2">User Address</th>
                <th class="border border-gray-300 p-2">Status</th>
                <th class="border border-gray-300 p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each users as user}
                <tr>
                    <td class="border border-gray-300 p-2">{user.address}</td>
                    <td class="border border-gray-300 p-2">{user.status}</td>
                    <td class="border border-gray-300 p-2">
                        <button 
                            on:click={() => verifyUser(user.address)} 
                            class="bg-green-500 text-white px-2" 
                            disabled={isLoading}
                        >
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </button>
                        <button 
                            on:click={() => revokeUser(user.address)} 
                            class="bg-red-500 text-white px-2 ml-2" 
                            disabled={isLoading}
                        >
                            {isLoading ? 'Revoking...' : 'Revoke'}
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
