import React from 'react'

export default function About(props) {

    let clr='';
    let bgclr = '';

    if(props.mode === 'white'){
        clr = 'black';
        bgclr = 'white'
    }
    else if(props.mode === 'red'){
        clr = 'white';
        bgclr = '#3f0000';
    }
    else if(props.mode === 'blue'){
        clr = 'white';
        bgclr = '#044ebb';
    }
    else if(props.mode === 'green'){
        clr = 'white';
        bgclr = '#116d42';
    }
    else if (props.mode === 'yellow'){
        clr = 'black';
        bgclr = '#e7ad00';
    }
    
    return (
        <div className='container rounded' id="about-content" style={{color:clr, backgroundColor:bgclr}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{color:clr, backgroundColor:bgclr}}>
                <div className="accordion-item" style={{color:clr, backgroundColor:bgclr}}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:clr, backgroundColor:bgclr}}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:clr, backgroundColor:bgclr}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:clr, backgroundColor:bgclr}}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={{color:clr, backgroundColor:bgclr}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:clr, backgroundColor:bgclr}}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:clr, backgroundColor:bgclr}}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" style={{color:clr, backgroundColor:bgclr}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:clr, backgroundColor:bgclr}}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
