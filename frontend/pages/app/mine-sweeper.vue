<template>
  <v-container class="board">
    <mine-sweeper-board
      :field="mineSweeper.field"
      :is-game-over="mineSweeper.isGameOver"
      :is-game-clear="mineSweeper.isGameClear"
      @click-cell="onClickCell"
      @hold-cell="mineSweeper.holdCell"
    />

    <div>{{ lastMineCount }} / {{ totalMineCount }}</div>

    <div v-if="mineSweeper.isGameOver">Game Over</div>

    <div v-else-if="mineSweeper.isGameClear">Game Clear</div>

    <v-btn @click="mineSweeper.initialize"> Restart </v-btn>

    <v-btn @click="levelSelectDialog = true"> Level Select </v-btn>

    <v-dialog v-model="levelSelectDialog">
      <v-card>
        <v-card-title> Level Select </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="level in levels"
              :key="level.mineCount"
              @click="setLevel(level.y, level.x, level.mineCount)"
            >
              <v-list-item-title>
                {{ level.level }} : {{ level.x }} x {{ level.y }} ({{
                  level.mineCount
                }})
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title class="mb-4"> Custom </v-list-item-title>
              <v-list-item-content>
                <v-row>
                  <v-number-input
                    v-model="customLevel.width"
                    label="Width"
                    min="5"
                    max="50"
                  />
                  <v-number-input
                    v-model="customLevel.height"
                    label="Height"
                    min="5"
                    max="50"
                  />
                  <v-number-input
                    v-model="customLevel.mineCount"
                    label="Mine Count"
                    min="1"
                    :max="customLevel.width * customLevel.height - 10"
                  />
                </v-row>
                <v-btn
                  @click="
                    setLevel(
                      customLevel.height,
                      customLevel.width,
                      customLevel.mineCount,
                    )
                  "
                >
                  Set
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
const mineSweeper = useMineSweeper();
const totalMineCount = computed(() => mineSweeper.mineCount);
const lastMineCount = computed(() => mineSweeper.lastMineCount);

const levelSelectDialog = ref(false);

mineSweeper.initialize();

const customLevel = ref({
  width: 9,
  height: 9,
  mineCount: 10,
});

const levels = [
  { y: 9, x: 9, mineCount: 10, level: 'Easy' },
  { y: 12, x: 12, mineCount: 18, level: 'Normal' },
  { y: 30, x: 15, mineCount: 90, level: 'Hard' },
];

const onClickCell = (y, x) => {
  if (mineSweeper.isFirstClick) {
    mineSweeper.start(y, x);
  }
  mineSweeper.clickCell(y, x);
};

const setLevel = (width, height, mineCount) => {
  mineSweeper.setLevel(width, height, mineCount);
  levelSelectDialog.value = false;
};
</script>
