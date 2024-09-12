function mainHandler(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('animated') === false) {
            if (entry.target.classList.contains('project-img')) {
                entry.target.classList.add('slide-in-elliptic-right-fwd', 'animated')
            } else if (entry.target.classList.contains('icon-container')) {
                entry.target.classList.add('flicker-in-1', 'animated')
            } else if (entry.target.classList.contains('skill-img', 'animated')) {
                entry.target.classList.add('puff-in-top', 'animated')
            } else if (entry.target.classList.contains('link-container')) {
                entry.target.classList.add('slide-in-left-1', 'animated')
            } else if (entry.target.classList.contains('diferential-item')) {
                entry.target.classList.add('scale-in-ver-top', 'animated')
            } else if (entry.target.classList.contains('cta-btn')) {
                entry.target.classList.add('scale-in-hor-center', 'animated')
            } else if (entry.target.classList.contains('subtitle')) {
                entry.target.classList.add('tracking-in-contract', 'animated')
            } else if (entry.target.classList.contains('description-text')) {
                entry.target.classList.add('focus-in-expand-fwd','animated')
            } else if (entry.target.classList.contains('text-data')) {
                entry.target.classList.add('focus-in-expand-fwd','animated')
            }

            if (entry.target.id === 'profile-img') {
                entry.target.classList.add('scale-in-top', 'animated')
            }

            if (entry.target.tagName === 'FORM') {
                entry.target.classList.add('fade-in-top', 'animated')
            } else if (entry.target.tagName === 'LI') {
                if (entry.target.classList.contains('item-group-1')) {
                    entry.target.classList.add('slide-in-left-1', 'animated')
                } else if (entry.target.classList.contains('item-group-2')) {
                    entry.target.classList.add('slide-in-left-2', 'animated')
                }
            } else if (entry.target.tagName === 'H3') {
                entry.target.classList.add('focus-in-expand-fwd','animated')
            } else if (entry.target.tagName === 'H4') {
                entry.target.classList.add('focus-in-expand-fwd','animated')
            }
        }
    })
}

function updateLangSelect(langSelect, htmlLang) {
    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        langSelect.getElementsByTagName('option')[0].textContent = 'PT'
        langSelect.getElementsByTagName('option')[1].textContent = 'EN'
    } else {
        if (htmlLang == 'pt-br') {
            langSelect.getElementsByTagName('option')[0].textContent = 'Português'
            langSelect.getElementsByTagName('option')[1].textContent = 'Inglês'
        } else if (htmlLang == 'en-us') {
            langSelect.getElementsByTagName('option')[0].textContent = 'Portuguese'
            langSelect.getElementsByTagName('option')[1].textContent = 'English'
        }
    }
}

function setTranslation(lang) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `/translations/${lang}/`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText)
                let linksTranslations = document.querySelectorAll('a[data-translation="true"]')
                let optionsTranslations = document.querySelectorAll('option[data-translation="true"]')
                let buttonsTranslations = document.querySelectorAll('button[data-translation="true"]')
                let heading1Translations = document.querySelectorAll('h1[data-translation="true"]')
                let paragraphTranslations = document.querySelectorAll('p[data-translation="true"]')
                let heading2Translations = document.querySelectorAll('h2[data-translation="true"]')
                let spanTranslations = document.querySelectorAll('span[data-translation="true"]')
                let heading3Translations = document.querySelectorAll('h3[data-translation="true"]')
                let heading4Translations = document.querySelectorAll('h4[data-translation="true"]')
                let labelsTranslations = document.querySelectorAll('label[data-translation="true"]')
                let heading5Translations = document.querySelectorAll('h5[data-translation="true"]')
                let translations = [linksTranslations, optionsTranslations, buttonsTranslations, heading1Translations, paragraphTranslations, heading2Translations, spanTranslations, heading3Translations, heading4Translations, labelsTranslations, heading5Translations]
                document.querySelector('html').setAttribute('lang', response.lang)
                if (response.lang === 'pt-br') {
                    translations.forEach(elements => {
                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'A') {
                                elements[i].textContent = response.translations.a[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'OPTION') {
                                elements[i].textContent = response.translations.option[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'BUTTON') {
                                elements[i].textContent = response.translations.button[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H1') {
                                elements[i].textContent = response.translations.h1[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'P') {
                                elements[i].innerHTML = response.translations.p[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H2') {
                                elements[i].textContent = response.translations.h2[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'SPAN') {
                                elements[i].textContent = response.translations.span[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H3') {
                                elements[i].textContent = response.translations.h3[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H4') {
                                elements[i].textContent = response.translations.h4[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'LABEL') {
                                elements[i].textContent = response.translations.label[i].ptBR
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H5') {
                                elements[i].textContent = response.translations.h5[i].ptBR
                            }
                        }
                    })
                } else if (response.lang === 'en-us') {
                    translations.forEach(elements => {
                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'A') {
                                elements[i].textContent = response.translations.a[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'OPTION') {
                                elements[i].textContent = response.translations.option[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'BUTTON') {
                                elements[i].textContent = response.translations.button[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H1') {
                                elements[i].textContent = response.translations.h1[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'P') {
                                elements[i].innerHTML = response.translations.p[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H2') {
                                elements[i].textContent = response.translations.h2[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'SPAN') {
                                elements[i].textContent = response.translations.span[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H3') {
                                elements[i].textContent = response.translations.h3[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H4') {
                                elements[i].textContent = response.translations.h4[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'LABEL') {
                                elements[i].textContent = response.translations.label[i].enUS
                            }
                        }

                        for (let i = 0; i < elements.length; i++) {
                            if (elements[i].tagName === 'H5') {
                                elements[i].textContent = response.translations.h5[i].enUS
                            }
                        }
                    })
                }
            } else {
                console.error(`${xhr.status}: Não foi possível carregar as traduções!`)
            }
        }
    }

    xhr.send()
}

function setFirstAnimations() {
    let mainLinks = document.querySelectorAll('a.main-nav-link')
    mainLinks[0].classList.add('slide-in-blurred-left-1')
    mainLinks[1].classList.add('slide-in-blurred-left-2')
    mainLinks[2].classList.add('slide-in-blurred-left-3')
    mainLinks[3].classList.add('slide-in-blurred-left-4')
    document.querySelector('div.input-group').classList.add('flicker-in-1')
    document.querySelector('button#main-menu-btn').classList.add('flicker-in-1')
    document.querySelector('h1').classList.add('tracking-in-expand-fwd-top-1')
}

function setSkillImages(imgs) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/skills-covers')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText)
                for (let x = 0; x <= 10; x++) {
                    imgs[x].setAttribute('src', response[x])
                }
            }
        }
    }

    xhr.send()
}

function setProjectsImages(imgs) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', '/projects-covers')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            if (xhr.status == 200) {
                let response = JSON.parse(xhr.responseText)
                for (let x = 0; x <= 3; x++) {
                    imgs[x].setAttribute('src', response[x])
                }
            }
        }
    }

    xhr.send()
}

window.onload = () => {
    let mainMenuBtn = document.querySelector('button#main-menu-btn')
    let mainMenu = document.querySelector('menu#main-menu')
    let inputGroupText = document.querySelector('span.input-group-text')
    let langSelect = document.querySelector('select.form-select')
    let projectModalsBtns = document.querySelectorAll('button.project-modal-btn')
    let closeBtnModals = document.querySelectorAll('button.close-btn')
    let langProccessOverlay = document.querySelector('div#lang-proccess-overlay')
    let instersectionOpt = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }

    let mainObserver = new IntersectionObserver(mainHandler, instersectionOpt)
    let targets = [document.querySelector('img#profile-img'), document.forms[0]]
    let htmlLang = document.querySelector('html').getAttribute('lang')
    let skillImages = document.querySelectorAll('img.skill-img')
    let projectImages = document.querySelectorAll('img.project-img-modal')
    setTranslation('pt-br')
    setProjectsImages(projectImages)
    setSkillImages(skillImages)
    updateLangSelect(langSelect, htmlLang)
    setFirstAnimations()
    document.querySelectorAll('img.project-img').forEach(img => targets.push(img))
    document.querySelectorAll('i.icon-container').forEach(i => { targets.push(i) })
    skillImages.forEach(img => { targets.push(img) })
    document.querySelectorAll('a.link-container').forEach(a => { targets.push(a) })
    document.querySelectorAll('div.diferential-item').forEach(div => { targets.push(div) })
    document.querySelectorAll('button.cta-btn').forEach(button => { targets.push(button) })
    document.querySelectorAll('h2.subtitle').forEach(h2 => { targets.push(h2) })
    document.querySelectorAll('p.description-text').forEach(p => { targets.push(p) })
    document.querySelectorAll('li').forEach(li => { targets.push(li) })
    document.querySelectorAll('h3').forEach(h3 => { targets.push(h3) })
    document.querySelectorAll('h4').forEach(h4 => { targets.push(h4) })
    document.querySelectorAll('.text-data').forEach(text => { targets.push(text) })
    targets.forEach(target => { mainObserver.observe(target) })
    window.onresize = () => { updateLangSelect(langSelect) }
    mainMenuBtn.onclick = () => {
        mainMenuBtn.classList.toggle('main-menu-opened')
        mainMenu.classList.toggle('opened')
    }

    langSelect.addEventListener('input', () => {
        langProccessOverlay.classList.replace('d-none', 'd-flex')
        setTimeout(() => {
            setTranslation(langSelect.value)
            langProccessOverlay.classList.replace('d-flex', 'd-none')
        }, 3000)
    })

    inputGroupText.addEventListener('click', () => { langSelect.click() })
    projectModalsBtns.forEach(btn => {
        btn.onclick = () => {
            let overlay = btn.previousElementSibling
            overlay.classList.replace('hidden', 'show')
            overlay.childNodes[1].classList.add('tilt-in-right-1')
            if (overlay.childNodes[1].classList.contains('slide-out-elliptic-right-bck')) {
                overlay.childNodes[1].classList.remove('slide-out-elliptic-right-bck')
            }

            document.body.style.overflowY = 'hidden'
        }
    })

    closeBtnModals.forEach(btn => {
        btn.onclick = () => {
            let overlay = btn.parentElement.parentElement.parentElement
            if (overlay.childNodes[1].classList.contains('tilt-in-right-1')) {
                overlay.childNodes[1].classList.remove('tilt-in-right-1')
            }

            overlay.childNodes[1].classList.add('slide-out-elliptic-right-bck')
            document.body.style.overflowY = 'auto'
            overlay.classList.replace('show', 'hidden')
        }
    })

    document.forms[0].onsubmit = event => {
        event.preventDefault()
        let nameField = document.querySelector('input#name-field').value
        let nameVal = /^[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/
        if (nameVal.test(nameField) === true) {
            let formFields = {
                name: nameField,
                email: document.querySelector('input#email-field').value,
                company: document.querySelector('input#company-field').value,
                message: document.querySelector('textarea#message-field').value
            }
    
            let xhr = new XMLHttpRequest()
            xhr.open('POST', '/client-message')
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onreadystatechange = () => {
                if (xhr.readyState == xhr.DONE) {
                    if (xhr.status == 200) {
                        console.log(JSON.parse(xhr.responseText))
                        document.querySelector('button#open-modal-msg-client').click()
                    } else {
                        if (htmlLang == 'pt-br') {
                            alert('Não foi possível enviar a sua mensagem, porfavor tente novamente mais tarde ou verifique bem os seus dados!')
                        } else if (htmlLang == 'en-us') {
                            alert('Was not possible to send your message, please try again later or verify well your data!')
                        }
                    }
                }
            }
    
            xhr.send(JSON.stringify(formFields))
        } else {
            if (htmlLang == 'pt-br') {
                alert('O seu nome deve ter apenas letras com ou sem acentos e apenas um espaço!')
            } else if (htmlLang == 'en-us') {
                alert('Your name must only have letters with or without accents and only one space!')
            }
        }
    }
}
