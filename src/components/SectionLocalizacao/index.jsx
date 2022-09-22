import { Container } from "./style"

export function SectionLocalizacao(){
   

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
    }
    function showLocation(position){
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        const url=`https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        window.open(url,'map')
    }

    return(

        <Container>
            <h1>Localização</h1>
            <div className="cicle"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and
               typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div class="mapouter">
                <iframe width="600" height="500" id="gmap_canvas" 
                    src=""
                    name="map" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>    
            </div>
            <div></div>
        </Container>
    )
}