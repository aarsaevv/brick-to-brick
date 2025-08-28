<template>
  <div :class="$style.card">
    <img :src="profile.avatarUrl" alt="Profile avatar" :class="$style.image" />
    <div :class="$style.info">
      <div :class="$style.basicInfo">
        <h1 :class="$style.profileName">{{ profile.name }}</h1>
        <icon-girl />
      </div>
      <div :class="$style.additionalInfo">
        <div :class="$style.socials">
          <icon-whatsapp />
          <icon-viber />
          <icon-telegram />
        </div>
        <router-link to="/comments" :class="$style.commentsLink"
          >Комментарии</router-link
        >
      </div>
    </div>
    <div :class="$style.statusWrapper">
      <p :class="$style.caption">Статус</p>
      <p :class="$style.status">
        <span
          :class="{
            [$style.statusIcon]: true,
            [$style.active]: isProfileActive,
            [$style.disabled]: !isProfileActive,
          }"
        />
        {{ statusTitle }}
      </p>
    </div>
    <div :class="$style.contactsWrapper">
      <div>
        <p :class="$style.caption">Телефон</p>
        <p>{{ profile.personal_phone }}</p>
      </div>
      <div>
        <p :class="$style.caption">Дата рождения</p>
        <p>{{ profile.birthday }}</p>
      </div>
      <div>
        <p :class="$style.caption">Телефон родителей</p>
        <p>{{ profile.parents_phone }}</p>
      </div>
      <div>
        <p :class="$style.caption">Адрес</p>
        <p>{{ profile.address }}</p>
      </div>
    </div>
    <div :class="$style.controls">
      <app-slot-button>
        <icon-edit />
      </app-slot-button>
      <app-slot-button>
        <icon-delete />
      </app-slot-button>
    </div>
  </div>
</template>

<script setup>
  import IconEdit from '@/components/icons/IconEdit.vue';
  import IconDelete from '@/components/icons/IconDelete.vue';
  import IconGirl from '@/components/icons/IconGirl.vue';
  import IconWhatsapp from '@/components/icons/IconWhatsapp.vue';
  import IconViber from '@/components/icons/IconViber.vue';
  import IconTelegram from '@/components/icons/IconTelegram.vue';
  import AppSlotButton from '@/components/ui/AppSlotButton.vue';

  const { profile } = defineProps({
    profile: Object,
  });

  const isProfileActive = computed(() => {
    return profile.status === 'active';
  });

  const statusTitle = computed(() => {
    return isProfileActive.value ? 'Активен' : 'Отключен';
  });
</script>

<style lang="scss" module>
  @use '@/assets/fonts.scss' as fonts;

  .card {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    width: 100%;
    height: 152px;
    background-color: var(--bg-color-light);
    padding: var(--spacing-20);
    box-sizing: border-box;
    border-radius: var(--border-radius-10);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .image {
    width: 112px;
    height: 112px;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-40);
  }

  .basicInfo {
    display: flex;
    align-items: center;
    gap: var(--spacing-30);
  }

  .profileName {
    color: var(--text-color-accent);
    -webkit-text-stroke: 1px var(--text-color-dark);
    text-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);

    @include fonts.Heading-1();
  }

  .additionalInfo {
    display: flex;
    align-items: center;
    gap: var(--spacing-30);
  }

  .socials {
    display: flex;
    gap: var(--spacing-10);
  }

  .commentsLink {
    color: var(--text-color-accent);
    text-decoration: underline;
  }

  .statusWrapper {
    align-self: end;
  }

  .status {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);
  }

  .statusIcon {
    display: block;
    width: 9px;
    height: 9px;
    border-radius: var(--border-radius-2);
  }

  .active {
    background-color: var(--status-color-positive);
  }

  .disabled {
    background-color: var(--status-color-negative);
  }

  .contactsWrapper {
    display: grid;
    grid-template-areas: '1fr 1fr' '1fr 1fr';
    grid-row-gap: var(--spacing-36);
  }

  .caption {
    color: var(--text-color-ghost);

    @include fonts.Caption-2();
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-44);
  }
</style>
