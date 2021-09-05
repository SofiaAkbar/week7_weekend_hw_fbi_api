class Suspect {
    constructor(data) {
        this.name = data.title
        this.key = data.uid
        this.images = data.images 
        this.image =  this.images ? this.images[0].thumb : null
        this.caption = this.images ? this.images[0].caption : null
        this.remarks = data.remarks
        this.description = data.description
    }
}

export default Suspect; 