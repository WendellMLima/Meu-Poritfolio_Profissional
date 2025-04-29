function resolveProfile(profileData){
   const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto ${profileData.email}`
    
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone 
    phone.href = `tel ${profileData.phone}`
}


function updateSoftSkills(profileData){
    const softskills = document.getElementById('profile-skills-softSkills')

   softskills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardskills = document.getElementById('profile-skills-hardSkills')

   hardskills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLengueges(profileData){
    const lenguages = document.getElementById('profile-lenguages')
    
    lenguages.innerHTML = profileData.lenguages.map(lenguage => `<li>${lenguage}</li>`).join('')
    
}

function updatePortifolio(profileData){
    const portifolio = document.getElementById('profile-projetos')

    portifolio.innerHTML = profileData.portfolio.map(projeto => {
        return `
          <li>
            <span class="titulo">${projeto.name}</span>
            <a href="${projeto.url}"  target="_blank">${projeto.url}</a>

        </li>
        
        `
    }).join(' ')
}

function updateExperiencia(profileData){
    const experiencia = document.getElementById('profile-experiencia')

    experiencia.innerHTML = profileData.experiencia.map(experiencias => {
        return `
        <li>

           <span class="experiencia">${experiencias.name}</span>
           <span class="data">${experiencias.period}</span>
           <span>${experiencias.description}</span>

       </li>
        
        `
    }).join(' ')
}

(async function() {
    const profileData = await fetchProfileData()
    resolveProfile(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLengueges(profileData)
    updatePortifolio(profileData)
    updateExperiencia(profileData)
})()