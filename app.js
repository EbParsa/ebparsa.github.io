(function () {
  'use strict';

  var data = window.SITE_DATA;
  if (!data) return;

  var ICONS = {
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.26 5.67.42.36.79 1.07.79 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
    orcid: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>',
    x: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    bluesky: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg>',
    email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    telegram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5L2 22l5.156-1.344a9.92 9.92 0 0 0 4.875 1.281h.016c5.516 0 9.969-4.453 9.969-9.969C22.016 6.453 17.547 2 12.031 2zm5.813 14.156c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.016-1.297-4.984-4.328-5.141-4.531-.156-.203-1.234-1.641-1.234-3.125s.781-2.219 1.063-2.516c.281-.297.609-.375.813-.375.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.313.391-.453.516-.156.141-.313.297-.141.594.172.297.781 1.281 1.672 2.078 1.156 1.031 2.125 1.344 2.422 1.5.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.719.813 2.016.953.297.141.5.219.563.344.078.125.078.734-.172 1.438z"/></svg>',
    discord: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    arrow: '<svg class="card-trail-icon icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
    copy: '<svg class="card-trail-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
    sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
    share: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
  };

  function decodeEmail(obfuscated) {
    if (!obfuscated) return '';
    return atob(obfuscated.userB64) + '@' + atob(obfuscated.domainB64);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.focus();
      area.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(area);
      }
    });
  }

  function currentLang() {
    return document.documentElement.getAttribute('lang') === 'fa' ? 'fa' : 'en';
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ebparsa-theme', theme);
    } catch (e) {}
    var meta = document.getElementById('theme-color-meta');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0d1117' : '#f6f8fa');
    }
    updateThemeButton();
  }

  function updateThemeButton() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var lang = currentLang();
    var t = data.ui[lang];
    var isDark = currentTheme() === 'dark';
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    btn.setAttribute('aria-label', isDark ? t.themeToLight : t.themeToDark);
    btn.title = isDark ? t.themeToLight : t.themeToDark;
  }

  function createCard(item, lang) {
    var t = data.ui[lang];
    var wrap = document.createElement('div');
    wrap.className = 'bento-item-wrap' + (item.featured ? ' is-featured' : '');

    var resolvedHandle = item.obfuscated ? decodeEmail(item.obfuscated) : item.handle;
    var resolvedUrl = item.obfuscated ? 'mailto:' + resolvedHandle : item.url;
    var label = lang === 'fa' && item.platformFa ? item.platformFa : item.platform;

    var card;
    if (resolvedUrl) {
      card = document.createElement('a');
      card.href = resolvedUrl;
      if (!item.obfuscated) {
        card.target = '_blank';
        card.rel = 'me noopener noreferrer';
      }
      card.setAttribute('aria-label', label + ' — ' + resolvedHandle);
    } else {
      card = document.createElement('button');
      card.type = 'button';
      card.setAttribute('aria-label', label + ' — ' + resolvedHandle + ' (' + t.copyHint + ')');
      card.title = t.copyHint;
    }

    card.className = 'bento-card' + (item.allowCopy ? ' has-inline-action' : '');

    var main = document.createElement('div');
    main.className = 'card-main';

    var iconBox = document.createElement('span');
    iconBox.className = 'card-icon';
    iconBox.innerHTML = ICONS[item.id] || '';

    var textBox = document.createElement('span');
    textBox.className = 'card-text';

    var platformEl = document.createElement('span');
    platformEl.className = 'card-platform';
    platformEl.textContent = label;

    var handleEl = document.createElement('span');
    handleEl.className = 'card-handle';
    handleEl.setAttribute('dir', 'ltr');
    handleEl.textContent = resolvedHandle;

    textBox.appendChild(platformEl);
    textBox.appendChild(handleEl);
    main.appendChild(iconBox);
    main.appendChild(textBox);
    card.appendChild(main);

    if (!item.allowCopy) {
      var trail = document.createElement('span');
      trail.className = 'card-trail';
      trail.innerHTML = resolvedUrl ? ICONS.arrow : ICONS.copy;
      card.appendChild(trail);

      if (!resolvedUrl) {
        var timer = null;
        card.addEventListener('click', function () {
          copyText(resolvedHandle).then(function () {
            trail.innerHTML = '<span class="copied-pill">' + ICONS.check + '<span>' + t.copied + '</span></span>';
            clearTimeout(timer);
            timer = setTimeout(function () {
              trail.innerHTML = ICONS.copy;
            }, 1800);
          });
        });
      }
    }

    wrap.appendChild(card);

    if (item.allowCopy) {
      var copyBtn = document.createElement('button');
      copyBtn.type = 'button';
      copyBtn.className = 'card-copy-btn';
      copyBtn.innerHTML = ICONS.copy;
      copyBtn.setAttribute('aria-label', t.copy + ' ' + resolvedHandle);
      copyBtn.title = t.copy;

      var copyTimer = null;
      copyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        copyText(resolvedHandle).then(function () {
          copyBtn.classList.add('is-copied');
          copyBtn.innerHTML = ICONS.check;
          copyBtn.title = t.copied;
          clearTimeout(copyTimer);
          copyTimer = setTimeout(function () {
            copyBtn.classList.remove('is-copied');
            copyBtn.innerHTML = ICONS.copy;
            copyBtn.title = t.copy;
          }, 1800);
        });
      });

      wrap.appendChild(copyBtn);
    }

    return wrap;
  }

  function updateLocalTime() {
    var timeEl = document.getElementById('local-time');
    if (!timeEl) return;
    try {
      var now = new Date();
      var formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: data.timezone || 'Asia/Tehran',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      timeEl.textContent = formatted + ' (UTC+3:30)';
    } catch (e) {
      timeEl.textContent = 'UTC+3:30';
    }
  }

  function render() {
    var lang = currentLang();
    var t = data.ui[lang];

    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    document.title = data.name[lang] + ' — @' + data.handle;

    var nameEl = document.getElementById('profile-name');
    var headlineEl = document.getElementById('profile-headline');
    var locationEl = document.getElementById('profile-location');
    var avatarEl = document.getElementById('avatar');
    var profilesTitleEl = document.getElementById('profiles-heading');
    var contactTitleEl = document.getElementById('contact-heading');
    var langBtn = document.getElementById('lang-toggle');
    var footerEl = document.getElementById('footer-text');
    var shareBtn = document.getElementById('btn-share');
    var shareTitleEl = document.getElementById('share-dialog-title');
    var shareCloseEl = document.getElementById('share-close');
    var shareCopyEl = document.getElementById('share-copy-btn');
    var shareNativeEl = document.getElementById('share-native-btn');

    if (nameEl) nameEl.textContent = data.name[lang];
    if (headlineEl) headlineEl.textContent = data.headline[lang];
    if (locationEl) locationEl.textContent = data.location[lang];
    if (avatarEl) avatarEl.alt = data.name[lang];
    if (profilesTitleEl) profilesTitleEl.textContent = t.profilesTitle;
    if (contactTitleEl) contactTitleEl.textContent = t.contactTitle;
    if (footerEl) footerEl.textContent = t.footerText;
    if (shareTitleEl) shareTitleEl.textContent = t.shareTitle;
    if (shareCloseEl) shareCloseEl.setAttribute('aria-label', t.close);

    if (shareBtn) {
      shareBtn.innerHTML = ICONS.share + '<span>' + t.share + '</span>';
      shareBtn.setAttribute('aria-label', t.share);
      shareBtn.title = t.share;
    }
    if (shareCopyEl && !shareCopyEl.classList.contains('is-done')) {
      shareCopyEl.innerHTML = ICONS.copy + '<span>' + t.copyLink + '</span>';
    }
    if (shareNativeEl) {
      shareNativeEl.hidden = typeof navigator.share !== 'function';
      shareNativeEl.innerHTML = ICONS.share + '<span>' + t.shareNative + '</span>';
    }

    if (langBtn) {
      langBtn.textContent = t.langLabel;
      langBtn.setAttribute('aria-label', t.langAria);
      langBtn.title = t.langAria;
    }

    updateThemeButton();
    updateLocalTime();

    var profilesGrid = document.getElementById('profiles-grid');
    if (profilesGrid) {
      profilesGrid.innerHTML = '';
      data.profiles.forEach(function (item) {
        profilesGrid.appendChild(createCard(item, lang));
      });
    }

    var contactGrid = document.getElementById('contact-grid');
    if (contactGrid) {
      contactGrid.innerHTML = '';
      data.contact.forEach(function (item) {
        contactGrid.appendChild(createCard(item, lang));
      });
    }
  }

  document.getElementById('lang-toggle').addEventListener('click', function () {
    var next = currentLang() === 'en' ? 'fa' : 'en';
    document.documentElement.setAttribute('lang', next);
    try {
      localStorage.setItem('ebparsa-lang', next);
    } catch (e) {}
    render();
  });

  document.getElementById('theme-toggle').addEventListener('click', function () {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  });

  var shareDialog = document.getElementById('share-dialog');
  document.getElementById('btn-share').addEventListener('click', function () {
    if (shareDialog && typeof shareDialog.showModal === 'function') {
      shareDialog.showModal();
    }
  });
  document.getElementById('share-close').addEventListener('click', function () {
    if (shareDialog) shareDialog.close();
  });
  if (shareDialog) {
    shareDialog.addEventListener('click', function (e) {
      if (e.target === shareDialog) shareDialog.close();
    });
  }

  var copyLinkTimer = null;
  document.getElementById('share-copy-btn').addEventListener('click', function () {
    var btn = this;
    var lang = currentLang();
    var t = data.ui[lang];
    copyText(data.siteUrl).then(function () {
      btn.classList.add('is-done');
      btn.innerHTML = ICONS.check + '<span>' + t.copied + '</span>';
      clearTimeout(copyLinkTimer);
      copyLinkTimer = setTimeout(function () {
        btn.classList.remove('is-done');
        btn.innerHTML = ICONS.copy + '<span>' + data.ui[currentLang()].copyLink + '</span>';
      }, 1800);
    });
  });

  document.getElementById('share-native-btn').addEventListener('click', function () {
    var lang = currentLang();
    if (navigator.share) {
      navigator.share({
        title: data.name[lang] + ' — @' + data.handle,
        url: data.siteUrl,
      }).catch(function () {});
    }
  });

  render();
  setInterval(updateLocalTime, 30000);
})();
