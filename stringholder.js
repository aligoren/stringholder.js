class StringHolder {
	constructor(data) {
        this.data = data;
        
        try {
            this.holder = data.holder.split('*')
        } catch (error) {
            
        }

		if(!this.holder) {
			this.holder = ['#{', '}']
		}

        try {
            this._strings = data.strings;
            this.use(this._strings);
        } catch (error) {
            
        }
        
	}
	
	use(data) {
        let objKeys = {};
        
        if(data) {
            objKeys = Object.keys(data);
        } else {
            objKeys = Object.keys(this._strings);
            data = this._strings;
        }

        this._strings = data;
        
	
		for(let key of objKeys) {
			let replace = `${this.holder[0]}${key}${this.holder[1]}`;
			
			let re = new RegExp(replace, "g");
			
			document.body.innerHTML = document.body.innerHTML.replace(re, data[key]);
		}
    }
    
    set strings(data) {
        this.use(data);
    }

    get strings() {
        return this._strings
    }
}