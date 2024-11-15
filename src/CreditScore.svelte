<script>
    let creditScoreHistory = []; // Replace with actual data fetching logic
    let isLoading = false; // Track loading state for data fetching
    let errorMessage = ''; // Track any errors encountered

    // Function to fetch credit score history
    async function fetchCreditScoreHistory() {
        isLoading = true;
        errorMessage = ''; // Clear previous error message
        try {
            console.log("Fetching Credit Score History");
            // Replace with actual logic to fetch data from the blockchain
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay

            // Simulated data
            creditScoreHistory = [
                { date: '2024-01-01', score: 700 },
                { date: '2024-02-01', score: 750 },
                { date: '2024-03-01', score: 720 },
            ];
        } catch (error) {
            console.error("Error fetching credit score history:", error);
            errorMessage = "There was an error fetching your credit score history. Please try again.";
        } finally {
            isLoading = false;
        }
    }

    // Fetch data when component mounts
    onMount(() => {
        fetchCreditScoreHistory();
    });
</script>

<div class="p-4">
    <h1 class="text-xl font-bold">Credit Score History</h1>

    {#if isLoading}
        <p>Loading...</p>
    {:else if errorMessage}
        <p class="text-red-500">{errorMessage}</p>
    {:else if creditScoreHistory.length > 0}
        <table class="min-w-full border-collapse border border-gray-200 mt-4">
            <thead>
                <tr>
                    <th class="border border-gray-300 p-2">Date</th>
                    <th class="border border-gray-300 p-2">Credit Score</th>
                </tr>
            </thead>
            <tbody>
                {#each creditScoreHistory as entry}
                    <tr>
                        <td class="border border-gray-300 p-2">{entry.date}</td>
                        <td class="border border-gray-300 p-2">{entry.score}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>No credit score history available.</p>
    {/if}
</div>
