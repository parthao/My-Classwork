class person
{
    constructor(id,name1,city1)
    {
        this.Id=id;
        this.Name=name1;
        this.City=city1;
    }

    print()
    {
        console.log(this.Id+" "+this.Name+" "+this.City);
    }
}

module.exports={person};