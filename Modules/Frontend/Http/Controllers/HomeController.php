<?php

namespace Modules\Frontend\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Modules\Konten\Entities\Anime;
use Modules\Konten\Entities\Episode;
use Modules\Konten\Entities\GenreAnime;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
    	$banner = Anime::query()->whereHas('episodes')->whereNull('deleted_at')
            ->whereNotNull('banner')->where('publish', 'Publish')
            ->inRandomOrder()->take(3)->get();
    	$ongoing = Anime::query()->whereHas('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->orderBy('created_at', 'DESC')->take(6)->get();
    	$popular = Anime::query()->whereHas('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->orderBy('rating', 'DESC')->take(6)->get();
    	$recent = Episode::query()->whereHas('anime')->whereNull('deleted_at')->orderBy('created_at', 'DESC')->take(6)->get();
    	$recommended = Anime::query()->whereHas('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->inRandomOrder()->limit(5)->get();
    	// return $recommended;
        return view('frontend::home.index')->with([
            'ongoing'     => $ongoing,
            'popular'     => $popular,
            'recent'      => $recent,
            'banner'      => $banner,
            'recommended' => $recommended,
            'genre'       => GenreAnime::get(),
        ]);
    }

    public function detail($slug)
    {
    	$anime_detail = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('slug', $slug)->get();
    	// return $anime_detail;
        return view('frontend::home.detail')->with([
            'anime_detail' => $anime_detail,
        ]);
    }

    public function ongoing()
    {
        $ongoing = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->orderBy('created_at', 'DESC')->paginate(9);
        $recommended = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->inRandomOrder()->limit(5)->get();
    	
        return view('frontend::home.ongoing')->with([
            'ongoing'     => $ongoing,
            'recommended' => $recommended,
            'genre'       => GenreAnime::get(),
        ]);
    }

    public function popular()
    {
        $popular = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->orderBy('rating', 'DESC')->take(6)->paginate(9);
        $recommended = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->inRandomOrder()->limit(5)->get();
        
        return view('frontend::home.popular')->with([
            'popular'     => $popular,
            'recommended' => $recommended,
            'genre'       => GenreAnime::get(),
        ]);
    }

    public function recent()
    {
        $recent = Episode::with('anime')->whereNull('deleted_at')->orderBy('created_at', 'DESC')->paginate(9);
        $recommended = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->inRandomOrder()->limit(5)->get();
        
        return view('frontend::home.recent')->with([
            'recent'      => $recent,
            'recommended' => $recommended,
            'genre'       => GenreAnime::get(),
        ]);
    }


    public function watch($anime, $episode)
    {   
        $episode = Episode::with('anime')->whereNull('deleted_at')->where('slug',$episode)->get();
        $anime = Anime::query()->withCount('episodes')->with('episodes')->where('slug',$anime)->get();

        return view('frontend::watch.index')->with([
            'episode' => $episode,
            'anime' => $anime,
        ]);
    }


    public function search(Request $request)
    {
        $data = Anime::with('episodes')->whereNull('deleted_at')->where('title', 'like', "%" . $request->search . "%")->where('publish', 'Publish')->orderBy('created_at', 'DESC')->paginate(8);

        return view('frontend::home.search')->with([
            'data'   => $data,
            'search' => $request->search,
            'genre'  => GenreAnime::get(),
        ]);
    }

    public function genre()
    {
        return view('frontend::home.genre')->with([
            'genre' => GenreAnime::get(),
        ]);
    }

    public function genreDetail(GenreAnime $genre)
    {
        $id = [];
        $anime = Anime::with('episodes')->where('publish', 'Publish')->get();
        foreach($anime as $arr_anime){
            if(in_array($genre->name, $arr_anime->genre)){
                array_push($id, $arr_anime->id);
            }
        }

        $data = Anime::with('episodes')->whereNull('deleted_at')
                ->whereIn('id', $id)
                ->where('publish', 'Publish')
                ->orderBy('created_at', 'DESC')
                ->paginate(8);

        return view('frontend::home.genre_detail')->with([
            'data'  => $data,
            'genre' => GenreAnime::get(),
            'genre_name' => $genre->name
        ]);
    }

    public function jadwal()
    {
       
        $jadwal_senin = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Senin')->orderBy('created_at', 'DESC')->take(6)->get();

        $jadwal_selasa = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Selasa')->orderBy('created_at', 'DESC')->take(6)->get();

        $jadwal_rabu = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Rabu')->orderBy('created_at', 'DESC')->take(6)->get();

        $jadwal_kamis = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Kamis')->orderBy('created_at', 'DESC')->take(6)->get();

        $jadwal_jumat = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Jumat')->orderBy('created_at', 'DESC')->take(6)->get();

        $jadwal_sabtu = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Sabtu')->orderBy('created_at', 'DESC')->take(6)->get();

        $jadwal_minggu = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->where('status', 'On Going')->where('jadwal_release', 'Minggu')->orderBy('created_at', 'DESC')->take(6)->get();

        
        $recommended = Anime::with('episodes')->whereNull('deleted_at')->where('publish', 'Publish')->inRandomOrder()->limit(5)->get();
        
        return view('frontend::home.jadwal')->with([
            'jadwal_senin' => $jadwal_senin,
            'jadwal_selasa' => $jadwal_selasa,
            'jadwal_rabu' => $jadwal_rabu,
            'jadwal_kamis' => $jadwal_kamis,
            'jadwal_jumat' => $jadwal_jumat,
            'jadwal_sabtu' => $jadwal_sabtu,
            'jadwal_minggu' => $jadwal_minggu,
            'genre'       => GenreAnime::get(),
            'recommended' => $recommended,
        ]);
    }

            

    public function animeList()
    {
        $data = Anime::with('episodes')->whereNull('deleted_at')
                ->where('publish', 'Publish')
                ->orderBy('title', 'ASC')
                ->get();
                    
        $on_going = Anime::with('episodes')->whereNull('deleted_at')
                    ->where('publish', 'Publish')
                    ->where('status', 'On Going')
                    ->orderBy('created_at', 'DESC')
                    ->get();

        return view('frontend::home.anime_list')->with([
            'data' => $data,
            'on_going' => $on_going,
        ]);
    }
}
