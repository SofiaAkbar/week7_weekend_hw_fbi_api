class Suspect {
    constructor(data) {
        this.name = data.title
        this.key = data.uid
        this.images = data.images 
        this.image =  this.images ? this.images[0].thumb : null
        this.caption = this.images ? this.images[0].caption : null
        this.caution = data.caution
        this.remarks = data.remarks
        this.description = data.description
        this.reward = data.reward
        this.aliases = data.aliases
        this.hair = data.hair_raw
        this.eyes = data.eyes
        this.complexion = data.complexion
        this.race = data.race_raw
        this.nationality = data.nationality
    }
}

export default Suspect; 