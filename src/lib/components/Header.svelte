<script lang="ts">
	let header = [
		{ name: "󱂵 /home", url: "/" },
		{ name: "󰖟 /website", url: "https://morgane.dev" },
		{ name: "󱅻 /about", url: "https://morgane.dev/about" }
	];

	let key: number = 0;
</script>

<style>
    @media screen and (min-width: 1080px) {
        table {
            width: 80%; /* Leave 10% margin on each side */
            margin-left: 10%;
            margin-right: 10%;
            border-collapse: separate;
            border: none;
        }

        td {
            text-align: center;
            border-collapse: collapse;
            border: none;
        }
    }
    @media screen and (max-width: 1080px) {
        table {
            table-layout: fixed;
            width: 100%;
            border-collapse: collapse;
            border: none;
        }

        td {
            text-align: center;
            border-collapse: collapse;
            border: none;
        }
    }
	.header {
        display: flex;
        justify-content: center;
        background: #10151b;
        box-sizing: border-box;
		border-bottom: .2rem solid #b8e3ff;
	}
	.header-child {
        display: inline-flex;
        align-items: center;
	}
</style>

{#key key}
	<header class="header" data-sveltekit-reload>
		<table>
			<thead>
				<tr>
					{#each header as page}
						<td style="width: {header.length}%">
							<h2 class="header-child"><a href="{page.url}">{page.name}</a></h2>
						</td>
					{/each}
				</tr>
			</thead>
		</table>
	</header>
{/key}