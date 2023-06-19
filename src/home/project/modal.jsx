"use client"
import React, { useEffect, useRef, useState } from 'react'
import CardProject from './cardProject'
import {
    Modal,
    FileInput,
    Label,
    Textarea,
    TextInput,
} from 'flowbite-react';
export default function CustomModal({visible,onChange}) {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tech, setTech] = useState('');
    const [url, setUrl] = useState('');
    const [urlGithub, setUrlGithub] = useState('');
    const rootRef = useRef(null)
    const handleImg = (e) => {
        let file = e.currentTarget.files[0];
        let fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
            fileReader.addEventListener("load", () => {
                setImg(fileReader.result);
            });
        }
    };

    useEffect(() => {
        rootRef.current = document.body;
    }, []);

    return (
        <div ref={rootRef}>
            <Modal
                root={rootRef.current ?? undefined}
                show={visible}
                onClose={(e)=>onChange(e)}
            >
                <Modal.Header>
                    Projects
                </Modal.Header>
                <Modal.Body>
                    <div className='w-full grid grid-cols-2 grid-rows-1'>
                        <CardProject img={img||'./img/Rectangle 13.png'} title={title||'Project Tile goes here'} description={description||"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={tech||"HTML, JavaScript, SASS, React"} url={url} urlGithub={urlGithub} />
                        <div>
                            <form className="flex max-w-md flex-col gap-1">
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="img"
                                            value="Image"
                                        />
                                    </div>
                                    <FileInput
                                        onChange={handleImg}
                                        id="img"
                                        placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="title"
                                            value="Title"
                                        />
                                    </div>
                                    <TextInput
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="title"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="Description"
                                            value="Description"
                                        />
                                    </div>
                                    <Textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="Description"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="tech"
                                            value="Technolgie"
                                        />
                                    </div>
                                    <Textarea
                                        value={tech}
                                        onChange={(e) => setTech(e.target.value)}
                                        id="tech"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className='flex gap-1'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="live-view"
                                                value="URL web view"
                                            />
                                        </div>
                                        <TextInput
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            id="live-view"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="github"
                                                value="URL Github"
                                            />
                                        </div>
                                        <TextInput
                                            value={urlGithub}
                                            onChange={(e) => setUrlGithub(e.target.value)}
                                            id="github"
                                            required
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
