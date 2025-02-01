<script>
    let query = "";

    function search() {
        // who said I couldn't have my own bang ?
        if (query.startsWith("!nx"))
            window.location.href = "https://search.nixos.org/packages?channel=24.11&from=0&size=50&sort=relevance&type=packages&query=" + query.replace("!nx", "");
        else
            window.location.href = "https://www.qwant.com/?q=" + query;
    }

    function handleKeydown(event) {
        if (event.key === "Enter")
            search();
    }
</script>

<style>

    .parent {
        padding-left: 20%;
        padding-right: 20%;
        margin-bottom: 2.5%;
    }

    /* starting from here,
    everything was made by Lucas Oliveira.
    pasted from :
    https://codepen.io/lucasyem/pen/ZEEYKdj

    found on https://freefrontend.com/css-input-text/
     */
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 50%;
    }

    .form__field {
        width: 100%;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #9b9b9b;
    }

    .form__field:focus {
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: #11998e;
            font-weight:700;
        }
        padding-bottom: 6px;
        border-width: 3px;
    }
    /* reset input */
    .form__field{
        &:required,&:invalid { box-shadow:none; }
    }
</style>

<center>
    <div class="form__group field parent">
        <input type="text"
               bind:value={query}
               on:keydown={handleKeydown}
               class="form__field"
               placeholder=""
               required />
        <label for="name" class="form__label">Search on qwant.com</label>
    </div>
</center>