const axios = require('axios').default;
const xmlbuilder2 = require('xmlbuilder2');

let root = xmlbuilder2.create ({ version:'1.0'})
        .ele(`AddressValidateRequest`, {USERID: '64ARAQ0017381' })
        .ele('Address')
            .ele('Address1').txt('185 Berry St').up()
            .ele('Address2').txt('185 Berry St').up()
            .ele('Address1').txt('185 Berry St').up()
            .ele('Address1').txt('185 Berry St').up()
            .ele('Address1').txt('185 Berry St').up()


let xml = `<RateV4Request USERID="64ARAQ0017381">
    <Revision>2</Revision>
    <Package ID="0">
        <Service> PRIORITY </Service>
        <ZipOrigination>2201</ZipOrigination>
        <ZipDestination>26301</ZipDestination>
        <Pounds>8</Pounds>
        <Ounces>2</Ounces>
        <Container></Container>
        <Machinable>TRUE</Machinable>
    </Package>
</RateV4Request>
`
let url = `https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&xml=` + encodeURIComponent(xml)

axios.get(url)
.then(function (response){
    console.log(response.data);
})
.catch(function (error){
    console.log(error);
});