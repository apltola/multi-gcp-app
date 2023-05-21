<script lang="ts">
  export let imageUrl: string;
  export let wrapperPadding = 75;

  console.log('imageUrl', imageUrl);
</script>

<div class="image-wrap" style="padding-top: {wrapperPadding + '%'}">
  <img src={imageUrl} alt="img" />
</div>

<style>
  .image-wrap {
    position: relative;
    overflow: hidden;
  }

  .image-wrap img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
</style>
