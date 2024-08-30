
// export class Cart{
//     category:Category[];
//     constructor(){
//         this.category = []
//     }

//     addCategory(category:Category){
//         this.category.push(category);
//     }


//     removeCategory(id:string){
//         this.category = this.category.filter(category => category.id !== id);
//     }
    

//     getAllItemsInCategory(categoryId:string): Category | undefined{
//         if(!categoryId) throw new Error('Category id is required');
//         return this.category.find(c => c.id === categoryId);
//     }
// }