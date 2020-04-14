window.addEventListener('load',()=>{
    let source = [ "foo,bar,baz" ];
    let b1 = document.querySelector('#button1')
    b1.addEventListener('click',() => {
        console.log("test");
        let file_property = { type: "text/csv", lastModified: 0 };
        let file = new File(source, "test.csv", file_property );
        let file_reader = new FileReader();
        file_reader.readAsText(file);
    });
    let blob = new Blob(source,{type:"text/csv"});
    let a1 = document.querySelector('#a1');
    a1.href= URL.createObjectURL(blob);
    a1.download = 'test.csv';
    a1.click();
});