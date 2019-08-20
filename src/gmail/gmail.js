import { html, svg, render } from "https://unpkg.com/lit-html?module";

/**
 * Count remaining GMail's mails with API query.
 * @param {*} gapi
 */
export async function countInboxMail(gapi) {
  const res = await gapi.client.gmail.users.messages.list({
    userId: "me",
    labelIds: ["INBOX"],
    // "maxResults": 500,
    q: "-category:social -category:promotions"
  });
  return res.result.messages
    ? res.result.messages.length
    : res.result.resultSizeEstimate;
}

/**
 *
 * @param {number} nMail - number of unread e-mail
 */
const gmailIcon = nMail => {
  const cPaper = "#E3E3E3";
  const cBack = "#231F20";
  const cMain = nMail == 0 ? "#3dc7d5" : "#D54B3D";
  const cEdge = nMail == 0 ? "#27d3d7" : "#D72B27";
  return svg`
    <!-- GMail Icon -->
    <!-- Shadow parts -->
    <defs>
      <linearGradient x1="0.00388991071%" y1="49.997619%" x2="100.032232%" y2="49.997619%" id="linearGradient-1">
        <stop stop-color="#000000" stop-opacity="0.1" offset="0%"></stop>
        <stop stop-color="#000000" stop-opacity="0.2" offset="100%"></stop>
      </linearGradient>
    </defs>
    <!-- Main Icon -->
    <g>
      <path d="M238.833923,193.595007 L16.1542195,193.595007 C7.51970044,193.595007 0.248526454,186.551057 0.248526454,177.689314 L0.248526454,16.8145898 C0.248526454,8.18007073 7.29247625,0.908896748 16.1542195,0.908896748 L238.833923,0.908896748 C247.468442,0.908896748 254.739616,7.95284654 254.739616,16.8145898 L254.739616,177.689314 C254.739616,186.551057 247.695666,193.595007 238.833923,193.595007 L238.833923,193.595007 Z" fill=${cPaper}></path>
      <path d="M32.0599126,193.595007 L127.266847,117.020456 L127.94852,112.930421 L29.7876708,42.2636988 L29.5604466,190.186644 L32.0599126,193.595007 Z" opacity="0.1" fill=${cBack}></path>
      <path d="M16.1542195,193.595007 C7.29247625,193.595007 0.248526454,186.551057 0.248526454,177.689314 L0.248526454,16.5873656 C0.248526454,7.72562236 7.29247625,6.13505305 16.1542195,6.13505305 C25.0159628,6.13505305 32.0599126,7.95284654 32.0599126,16.5873656 L32.0599126,193.595007 L16.1542195,193.595007 L16.1542195,193.595007 Z" fill=${cMain}></path>
      <path d="M16.1542195,8.40729492 C27.5154289,8.40729492 29.7876708,11.8156577 29.7876708,16.5873656 L29.7876708,191.322765 L16.1542195,191.322765 C8.65582137,191.322765 2.52076832,185.187712 2.52076832,177.689314 L2.52076832,16.5873656 C2.52076832,11.5884335 4.79301019,8.40729492 16.1542195,8.40729492 L16.1542195,8.40729492 Z M16.1542195,6.13505305 C7.29247625,6.13505305 0.248526454,7.95284654 0.248526454,16.5873656 L0.248526454,177.689314 C0.248526454,186.551057 7.29247625,193.595007 16.1542195,193.595007 L32.0599126,193.595007 L32.0599126,16.5873656 C22.0599126,7.72562236 25.0159628,6.13505305 16.1542195,6.13505305 L16.1542195,6.13505305 L16.1542195,6.13505305 Z" fill=${cEdge}></path>
      <path d="M238.833923,193.595007 L222.92823,193.595007 L222.92823,16.1329173 C222.92823,7.27117398 229.972179,6.13505305 238.833923,6.13505305 C247.695666,6.13505305 254.739616,7.27117398 254.739616,16.1329173 L254.739616,177.916538 C254.739616,186.551057 247.695666,193.595007 238.833923,193.595007 L238.833923,193.595007 Z" fill=${cMain}></path>
      <path d="M238.833923,8.40729492 C249.059011,8.40729492 252.467374,10.4523126 252.467374,16.1329173 L252.467374,177.916538 C252.467374,185.414937 246.332321,191.54999 238.833923,191.54999 L225.200472,191.54999 L225.200472,16.1329173 C225.200472,10.2250884 228.608834,8.40729492 238.833923,8.40729492 L238.833923,8.40729492 Z M238.833923,6.13505305 C229.972179,6.13505305 222.92823,7.27117398 222.92823,16.1329173 L222.92823,193.822231 L238.833923,193.822231 C247.695666,193.822231 254.739616,186.778282 254.739616,177.916538 L254.739616,16.1329173 C254.739616,7.27117398 247.695666,6.13505305 238.833923,6.13505305 L238.833923,6.13505305 L238.833923,6.13505305 Z" fill=${cEdge}></path>
      <path d="M170.666667,193.595007 L1.57979906,23.1947544 L10.4736149,26.8124541 L128.175744,111.567076 L254.73962,18.7604631 L254.739616,177.916538 C254.739616,186.551057 247.695666,193.595007 238.833923,193.595007 L170.666667,193.595007 Z" fill="url(#linearGradient-1)"></path>
      <path d="M127.266847,117.020456 L7.06525206,29.7663685 C0.0213022675,24.5402122 -2.02371542,14.542348 3.20244088,7.49839817 C8.42859718,0.454448374 18.6536856,-1.13612093 25.9248596,4.09003537 L127.494071,77.9378961 L229.744955,3.18113862 C236.788905,-2.04501768 246.786769,-0.454448374 252.012926,6.81672561 C257.239082,13.8606754 255.648513,23.8585396 248.377339,29.0846959 L127.266847,117.020456 L127.266847,117.020456 Z" fill=${cMain}></path>
      <path d="M238.833923,2.27224187 L238.833923,2.27224187 C243.151182,2.27224187 247.241218,4.31725955 249.967908,7.95284654 C254.285167,14.0878996 252.921822,22.4951945 247.013993,27.0396782 L127.266847,114.293766 L8.42859718,27.948575 C2.29354414,23.4040913 0.702974828,14.7695722 5.02023438,8.86174329 C7.51970044,5.45338049 11.83696,3.18113862 16.3814437,3.18113862 C19.3353582,3.18113862 22.2892726,4.09003537 24.5615145,5.90782886 L125.903502,79.5284654 L127.266847,80.4373622 L128.630192,79.5284654 L230.653852,4.77170793 C233.153318,3.18113862 235.880008,2.27224187 238.833923,2.27224187 L238.833923,2.27224187 Z M238.833923,0 C235.652784,0 232.244421,0.908896748 229.517731,2.95391443 L127.266847,77.7106719 L25.6976354,3.86281118 C22.9709451,1.8177935 19.5625823,0.908896748 16.1542195,0.908896748 C11.1552874,0.908896748 6.15635532,3.18113862 2.9752167,7.49839817 C-2.02371542,14.542348 0.0213022675,24.5402122 7.06525206,29.7663685 L127.266847,117.24768 L248.150114,29.0846959 C255.194064,23.8585396 256.784634,14.0878996 251.785701,6.81672561 C248.604563,2.27224187 243.832855,0 238.833923,0 L238.833923,0 L238.833923,0 Z" fill=${cEdge}></path>
    </g>
    <!-- #mail badge -->
    ${
      nMail != 0
        ? svg`<text x=43 y=180 font-size="50" fill=${cMain} stroke=${cEdge}>${nMail}</text>`
        : ""
    }
  `;
};

/**
 * Update html elements which contains number of mails.
 * @param {*} gapi
 */
export async function updateNInbox(gapi) {
  // Get inbox mail number from Gmail server.
  const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
  const NInbox = isSignedIn
    ? await countInboxMail(gapi)
    : "Please Sign-in Google";
  render(
    html`
      <section>
        <a href="https://gmail.com" target="_blank">
          <svg width="255" height="194">
            ${gmailIcon(NInbox)}
          </svg>
        </a>
      </section>
    `,
    document.body.querySelector("#inbox1")
  );
}
