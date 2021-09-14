import { useState } from 'react';
import Modal from 'react-modal';
import { FeatureGroup, MapContainer, Marker, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { Form } from '@unform/web';
import InputEventForm from '../InputEventForm';



import './styles.css';


const Maps = () => { //: React.FC<any>
    //const [mapLayers, setMapLayers] = useState([]);
    const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);

    //This function is called after a draw create event.
    function _onCreate(e) { //e: é um object, porém se definir como objeto dar erro. Definir como e: any para dar certo.

        const { layer } = e;
        //const { layerType, layer } = e;
        // if (layerType === "polygon") {
        //     const { _leaflet_id } = layer;

        //     setMapLayers((layers) => [ // não consegui identificar o tipo de layers. Definir como layers: any para dar certo.
        //         ...layers,
        //         { id: _leaflet_id, laglngs: layer.getLatLngs()[0] },
        //     ])

        //     console.log(layer._latlngs); //Retorna as coordenadas
        // }

        console.log(layer._latlngs); //Retorna as coordenadas
        handleOpenCreateEventModal();
    };

    function handleOpenCreateEventModal() {
        setIsCreateEventModalOpen(true);
    }
    function handleCloseCreateEventModal() {
        setIsCreateEventModalOpen(false);
    }

    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                </Marker>

                <FeatureGroup >
                    <EditControl
                        position={"topright"}
                        onCreated={_onCreate}

                        draw={{
                            rectangle: false,
                            circle: false,
                            polyline: false,
                            circlemarker: false,
                            marker: true
                        }}
                    />
                </FeatureGroup>
            </MapContainer>
            <Modal
                isOpen={isCreateEventModalOpen}
                onRequestClose={handleCloseCreateEventModal}
                className="modal-container"
            >
                <h1>Hello world</h1>
                <Form onSubmit={handleSubmit}>

                    <div>
                        <span>Início</span><InputEventForm name="name" />
                    </div>
                    <div>
                        <span>Término</span><InputEventForm name="name" />
                    </div>
                    <div>
                        <span>Tipo</span><InputEventForm name="name" />
                    </div>
                    <div>
                        <span>Descrição</span><InputEventForm name="name" />
                    </div>
                    <div>
                        <span>Vínculo</span><InputEventForm name="name" />
                    </div>
                    <button type="submit">Enviar</button>
                </Form>
            </Modal>
        </>
    );
}

export default Maps;
