(() => {
  const EVENT_PREFIX = "tootie_";

  const normalize = (value) => String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

  const inferEvent = (element) => {
    if (element.dataset.event) return element.dataset.event;
    const text = normalize(element.textContent);
    const href = element.getAttribute("href") || "";

    if (text.includes("free_website_audit") || text.includes("my_free_audit") || text.includes("fayetteville_website_audit") || href.includes("#audit") || href.includes("website-audit")) return "audit_cta_click";
    if (href.includes("sample-website-audit")) return "sample_audit_click";
    if (href.includes("/work/")) return "case_study_click";
    if (href.includes("website-design") || href.includes("website-redesign") || href.includes("landing-page-design") || href.includes("local-business") || href.includes("fayetteville")) return "service_page_click";
    if (element.hostname && element.hostname !== window.location.hostname) return "external_link_click";
    return "site_link_click";
  };

  const getPayload = (element, extra = {}) => ({
    event: extra.event || inferEvent(element),
    label: element.dataset.label || element.textContent?.trim() || element.getAttribute("aria-label") || "",
    href: element.href || element.getAttribute("action") || "",
    page: window.location.pathname,
    pageTitle: document.title,
    referrer: document.referrer,
    ...extra,
  });

  window.tootieTrack = (eventName, payload = {}) => {
    const event = eventName || payload.event || "site_interaction";
    const body = { ...payload, event };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ...body, event: `${EVENT_PREFIX}${event}` });

    if (typeof window.plausible === "function") window.plausible(event, { props: body });
    if (typeof window.gtag === "function") window.gtag("event", event, body);

    document.dispatchEvent(new CustomEvent("tootie:analytics", { detail: body }));
    return body;
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href], button[data-event]");
    if (!link) return;
    window.tootieTrack(inferEvent(link), getPayload(link));
  });

  document.addEventListener("submit", (event) => {
    const form = event.target.closest("form");
    if (!form) return;
    const formName = form.getAttribute("name") || form.id || "form";
    window.tootieTrack("form_submit", getPayload(form, { event: "form_submit", formName }));
  });

  document.querySelectorAll("form").forEach((form) => {
    const setHidden = (name, value) => {
      let input = form.querySelector(`input[name=\"${name}\"]`);
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.prepend(input);
      }
      input.value = value;
    };

    setHidden("source_page", window.location.href);
    setHidden("source_path", window.location.pathname);
    setHidden("referrer", document.referrer || "Direct / unknown");
    setHidden("submitted_from", document.title);
  });
})();
