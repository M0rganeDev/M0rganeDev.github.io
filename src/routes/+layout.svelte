<script>
    import Header from "$lib/components/Header.svelte";
    import ListContainer from "$lib/components/ListContainer.svelte";
    import Link from "$lib/components/Link.svelte";
    import SearchBar from "$lib/components/SearchBar.svelte";

	export const prerender = true;
</script>

<style>
    .paddle {
        padding-left: 10%;
        padding-right: 10%;
    }
</style>

<Header/>

<h1 class="paddle">Quick search :</h1>
<p class="paddle"><i>use Qwant for searches, type !nx to search a nix package</i></p>
<SearchBar />

<h1 class="paddle">Quick access :</h1>
<ListContainer name="Work">
    <Link name="Intra42" url="https://intra.42.fr"/>
    <Link name="Github" url="https://github.com/m0rganedev"/>
    <Link name="Render" url="https://dashboard.render.com/"/>
    <Link name="AppWrite" url="https://cloud.appwrite.io/console/"/>
    <Link name="URSSAF" url="https://www.autoentrepreneur.urssaf.fr/services/espace-personnel"/>
</ListContainer>

<ListContainer name="Media">
    <Link name="Youtube" url="https://youtube.com"/>
    <Link name="Reddit" url="https://reddit.com"/>
</ListContainer>

<ListContainer name="Misc">
    <Link name="W3Schools" url="https://www.w3schools.com/"/>
    <Link name="Nix Search" url="https://search.nixos.org"/>
</ListContainer>
