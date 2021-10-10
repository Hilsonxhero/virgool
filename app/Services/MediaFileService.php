<?php


namespace App\Services;


use App\Contracts\FileServiceContract;
use App\Models\Media;
use PHPUnit\Util\Filesystem;

class MediaFileService
{
    private static $file;
    private static $ext;
    private static $dir;
    private static $isPrivate;

    public static function privateUpload($file,$ext)
    {
        self::$file = $file;
        self::$dir = 'app/private/';
        self::$isPrivate = true;
        return self::upload();
    }

    public static function publicUpload($file,$ext)
    {
        self::$file = $file;
        self::$ext = $ext;
        self::$dir = 'app/public/';
        self::$isPrivate = false;
        return self::upload();
    }

    private static function upload()
    {
        $ext = self::$ext;
        foreach (config('media.MediaTypeServices') as $key => $service) {
            if (in_array($ext, $service['extensions'])) {
                return self::uploadByHandler(new $service['handler'], $key);
            }
        }
    }

    public static function delete($media)
    {
        foreach (config('media.MediaTypeServices') as $type => $service) {
            if ($media->type == $type) {
                return $service['handler']::delete($media);
            }
        }
    }

    private static function normalizeExtension($file): string
    {
        return strtolower($file->getClientOriginalExtension());
    }

    private static function filenameGenerator()
    {
        return uniqid();
    }

    private static function uploadByHandler(FileServiceContract $handler, $key): Media
    {
        $media = new Media();
        $media->files = $handler::upload(self::$file, self::filenameGenerator(), self::$dir,self::$ext);
        $media->type = $key;
        $media->user_id = auth()->id();
        $media->filename = 'file';
        $media->is_private = self::$isPrivate;
        $media->save();
        return $media;
    }

    public static function thumb(Media $media)
    {

        foreach (config('media.MediaTypeServices') as $type => $service) {
            if ($media->type == $type) {
                return $service['handler']::thumb($media);
            }
        }
    }

    public static function stream(Media $media)
    {

//        dd($media);
        foreach (config('media.MediaTypeServices') as $type => $service) {
            if ($media->type == $type) {
                return $service['handler']::stream($media);
            }
        }

    }

}
