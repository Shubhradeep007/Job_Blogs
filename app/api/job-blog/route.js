import { ConnectDB } from "@/lib/config/db";
import blogModel from "@/lib/models/BlogModel";
import { log } from "console";
import { writeFile } from 'fs/promises';

const { NextResponse } = require("next/server");
const fs = require('fs')

const LoadDb = async () => {
    await ConnectDB();
}

LoadDb();

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await blogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await blogModel.find({});
        return NextResponse.json({ blogs })
    }

}

export async function POST(request) {
    // console.log("Blog get hit");
    const formData = await request.formData();
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timeStamp}_${image.name}`;

    const saveBlogData = {
        tittle: `${formData.get('tittle')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImage: `${formData.get('authorImage')}`
    }

    await blogModel.create(saveBlogData);
    console.log("Blog Saved");


    return NextResponse.json({ success: true, msg: 'Blog Added' })
}

// delete api

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await blogModel.findById(id);
    fs.unlink(`./public${blog.image}`, () => {});
    await blogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
}



