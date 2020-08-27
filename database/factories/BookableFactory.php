<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use App\Bookable;


$suffix = [
    'Villa',
    'House',
    'Cottage',
    'Luxury Villas',
    'Cheap House',
    'Rooms',
    'Cheap Rooms',
    'Luxury Rooms',
    'Fancy Rooms'
];
$factory->define(Bookable::class, function (Faker $faker) use ($suffix) {
    return [
        'title' => $faker->city .  ' ' . Arr::random($suffix),
         'description' => $faker->text()
    ];
});
