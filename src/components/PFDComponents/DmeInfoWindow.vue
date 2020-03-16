<template>
  <div class="DMEINFOWINDOWCONTAINER">
    <div class="hidden" :class="imageClass"></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="52"
      viewBox="0 0 47 52"
    >
      <g id="dmeInfoWindow" transform="translate(-183.342 -190)">
        <rect
          id="Rectangle_55"
          data-name="Rectangle 55"
          width="46"
          height="51"
          rx="4"
          transform="translate(183.342 191)"
        />
        <text
          id="_10.7"
          data-name="10.7"
          transform="translate(185.342 225)"
          fill="#fefefe"
          font-size="13"
          font-family="SegoeUI-Semibold, Segoe UI"
          font-weight="600"
          letter-spacing="0.068em"
        >
          <tspan x="0" y="14">10.7</tspan>
        </text>
        <text
          id="NM"
          transform="translate(210.342 228)"
          fill="#fefefe"
          font-size="10"
          font-family="SegoeUI-Semibold, Segoe UI"
          font-weight="600"
          letter-spacing="-0.044em"
        >
          <tspan x="0" y="11">NM</tspan>
        </text>
        <text
          id="NAV2"
          transform="translate(185.342 201)"
          fill="#53eeee"
          font-size="10"
          font-family="SegoeUI-Semibold, Segoe UI"
          font-weight="600"
          letter-spacing="-0.013em"
        >
          <tspan x="0" y="11">NAV2</tspan>
        </text>
        <text
          id="DME"
          transform="translate(185.342 190)"
          fill="#fefefe"
          font-size="10"
          font-family="SegoeUI-Semibold, Segoe UI"
          font-weight="600"
          letter-spacing="-0.044em"
        >
          <tspan x="0" y="11">DME</tspan>
        </text>
        <text
          id="_117.20"
          data-name="117.20"
          transform="translate(185.342 212)"
          fill="#53eeee"
          font-size="13"
          font-family="SegoeUI-Semibold, Segoe UI"
          font-weight="600"
          letter-spacing="0.079em"
        >
          <tspan x="0" y="14">117.20</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "DmeInfoWindow",
  props: ["imageClass"]
};
</script>

<style lang="scss" scoped>
.PFDWINDDISPLAYCONTAINER {
  height: 100%;
  width: 100%;
}
.hidden {
  display: none;
}
</style>
