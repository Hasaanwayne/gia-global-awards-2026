"use client";

import Script from "next/script";

/**
 * Intercom Messenger — loads Fin / FinAgent on the site.
 *
 * INTERCOM_APP_ID is the Intercom Workspace ID (Settings → Installation).
 */
const INTERCOM_APP_ID = "hmpb359b";

export default function IntercomMessenger() {
    return (
        <>
            {/* Boot Intercom once the page is interactive. */}
            <Script id="intercom-settings" strategy="afterInteractive">
                {`window.intercomSettings = { app_id: "${INTERCOM_APP_ID}" };`}
            </Script>
            <Script id="intercom-loader" strategy="afterInteractive">
                {`(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`}
            </Script>
        </>
    );
}
